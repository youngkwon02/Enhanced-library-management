package enhancedLibrary.service.IssuesService;

import enhancedLibrary.domain.Books;
import enhancedLibrary.domain.BooksRepository;
import enhancedLibrary.domain.Issues;
import enhancedLibrary.domain.IssuesRepository;
import enhancedLibrary.web.dto.IssueSaveRequestDto;
import enhancedLibrary.web.dto.IssuesResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class IssuesService {
    private final IssuesRepository issuesRepository;
    private final BooksRepository booksRepository;
    @Transactional
    public String save(IssueSaveRequestDto issueData) {
        Books books=booksRepository.findById(issueData.getBookId()).orElseThrow(()->new IllegalArgumentException("No Books. id="+issueData.getBookId()));
        return issuesRepository.save(issueData.toEntity(books)).getGuestId();
    }

    @Transactional
    public IssuesResponseDto findByGuestId(String id){
        IssuesResponseDto issuesResponseDto=new IssuesResponseDto(issuesRepository.findByGuestId(id));
        return  issuesResponseDto;
    }

    @Transactional
    public List<IssuesResponseDto> findAllByGuestId(String guestId) {
        return issuesRepository.findAllByGuestId(guestId).stream()
                .map(IssuesResponseDto::new)
                .collect(Collectors.toList());
    }
}
