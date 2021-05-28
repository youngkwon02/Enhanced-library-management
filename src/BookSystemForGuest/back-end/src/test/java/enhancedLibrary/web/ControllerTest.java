/*package enhancedLibrary.web;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import enhancedLibrary.config.SecurityConfig;
import enhancedLibrary.domain.Books;
import enhancedLibrary.domain.BooksRepository;
import enhancedLibrary.domain.Issues;
import enhancedLibrary.domain.IssuesRepository;
import enhancedLibrary.service.IssuesService.IssuesService;
import enhancedLibrary.web.dto.IssueSaveRequestDto;
import enhancedLibrary.web.dto.IssuesResponseDto;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private IssuesRepository issuesRepository;

    @Autowired
    private IssuesService issuesService;

    @Autowired
    private BooksRepository booksRepository;

    @Autowired
    private WebApplicationContext context;

    private MockMvc mvc;

    @Before
    public void setup(){
        mvc= MockMvcBuilders
                .webAppContextSetup(context)
                .apply(springSecurity())
                .build();
    }

    @Test
    @PreAuthorize("authenticated")
    public void save() throws Exception {
        String guestId="user";
        Books bookId=new Books(1,"title", "author", "image_path", "description", 0, 1, "location", "ebookFile_path","paper");
        Date today=new Date();
        String startDate = new SimpleDateFormat("yyyy-MM-dd").format(today);
        Date due = new Date(today.getTime() + 14*(1000 * 60 * 60 * 24));
        String dueDate=new SimpleDateFormat("yyyy-MM-dd").format(due);
        Boolean overdueState=false;
        int calculatedFine=0;

        booksRepository.save(bookId);
        IssueSaveRequestDto issueSaveRequestDto=IssueSaveRequestDto.builder()
                .guestId(guestId)
                .bookId(1)
                .startDate(startDate)
                .dueDate(dueDate)
                .overdueState(overdueState)
                .calculatedFine(calculatedFine)
                .build();

        String url="http://localhost:"+port+"/issues";

        mvc.perform(post(url)
            .contentType(MediaType.APPLICATION_JSON_UTF8)
        .content(new ObjectMapper().writeValueAsString(issueSaveRequestDto)))
                .andExpect(status().isOk());

        ResponseEntity<String> responseEntity=restTemplate.
                postForEntity(url, issueSaveRequestDto, String.class);

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        List<Issues> all=issuesRepository.findAll();
        assertThat(all.get(0).getGuestId()).isEqualTo(guestId);
        assertThat(all.get(0).getBookId().getBookId()).isEqualTo(bookId.getBookId());
        assertThat(all.get(0).getBookId().getTitle()).isEqualTo(bookId.getTitle());
        assertThat(all.get(0).getBookId().getBookType()).isEqualTo(bookId.getBookType());
        assertThat(all.get(0).getBookId().getAuthor()).isEqualTo(bookId.getAuthor());
        assertThat(all.get(0).getStartDate()).isEqualTo(startDate);
        assertThat(all.get(0).getDueDate()).isEqualTo(dueDate);
        assertThat(all.get(0).getOverdueState()).isEqualTo(overdueState);
        assertThat(all.get(0).getCalculatedFine()).isEqualTo(calculatedFine);
    }

    @Test
    public void getIssueInfo() {
        String guestId="1";
        Books bookId=new Books(1,"title", "author", "image_path", "description", 0, 1, "location", "ebookFile_path","paper");
        String startDate="2017-07-07";
        String dueDate="2017-07-20";
        Boolean overdueState=false;
        int calculatedFine=0;

        booksRepository.save(bookId);

        Books bookId2=new Books(2,"title2", "author2", "image_path2", "description2", 0, 1, "location2", "ebookFile_path2","paper");
        booksRepository.save(bookId2);


        IssueSaveRequestDto issueSaveRequestDto=IssueSaveRequestDto.builder()
                .guestId(guestId)
                .bookId(1)
                .startDate(startDate)
                .dueDate(dueDate)
                .overdueState(overdueState)
                .calculatedFine(calculatedFine)
                .build();

        String url="http://localhost:"+port+"/issues";

        ResponseEntity<String> responseEntity=restTemplate.
                postForEntity(url, issueSaveRequestDto, String.class);

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);

        startDate="2018-08-07";
        dueDate="2018-08-20";

        issueSaveRequestDto=IssueSaveRequestDto.builder()
                .guestId(guestId)
                .bookId(2)
                .startDate(startDate)
                .dueDate(dueDate)
                .overdueState(overdueState)
                .calculatedFine(calculatedFine)
                .build();


        responseEntity=restTemplate.
                postForEntity(url, issueSaveRequestDto, String.class);

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);

        List<IssuesResponseDto> list=issuesService.findAllByGuestId("1");

        for(int i=0; i<list.size(); i++) {
            System.out.println("-----------------");
            System.out.println("GuestID:"+list.get(i).getGuestId());
            System.out.println("BookID:"+list.get(i).getBookId());
            System.out.println("Title:"+list.get(i).getTitle());
            System.out.println("Author:"+list.get(i).getAuthor());
            System.out.println("BookType:"+list.get(i).getBookType());
            System.out.println("StartDate:"+list.get(i).getStartDate());
            System.out.println("DueDate:"+list.get(i).getDueDate());
            System.out.println("OverdueState:"+list.get(i).isOverdueState());
            System.out.println("CalculatedFine:"+list.get(i).getCalculatedFine());
        }
    }

    @Test
    public void getBookContent() {
        int bookId=0;
        String title = "title";
        String author = "author";
        String image_path="image_path";
        String description="description";
        int price=0;
        int quantity=1;
        String location="location";
        String ebookFile_path="ebookFile_path";
        String bookType="paper";

        Books books=new Books(bookId, title, author, image_path, description, price, quantity, location, ebookFile_path, bookType);
        booksRepository.save(books);

        Optional<Books> result=booksRepository.findById(0);
        assertThat(result.get().getBookId()).isEqualTo(bookId);
        assertThat(result.get().getTitle()).isEqualTo(title);
        assertThat(result.get().getAuthor()).isEqualTo(author);
        assertThat(result.get().getImage_path()).isEqualTo(image_path);
        assertThat(result.get().getDescription()).isEqualTo(description);
        assertThat(result.get().getPrice()).isEqualTo(price);
        assertThat(result.get().getQuantity()).isEqualTo(quantity);
        assertThat(result.get().getLocation()).isEqualTo(location);
        assertThat(result.get().getEbookFile_path()).isEqualTo(ebookFile_path);
    }
}*/