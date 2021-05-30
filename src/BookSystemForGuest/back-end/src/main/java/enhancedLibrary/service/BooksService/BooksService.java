package enhancedLibrary.service.BooksService;

import enhancedLibrary.domain.Books;
import enhancedLibrary.domain.BooksRepository;
import enhancedLibrary.web.dto.BooksResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class BooksService {
    private final BooksRepository booksRepository;

    @Transactional(readOnly = true)
    public List<BooksResponseDto> findAll(){
        return booksRepository.findAll().stream()
                .map(BooksResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<BooksResponseDto> findAllByTitle(String title){
        return booksRepository.findAllByTitle(title).stream()
                .map(BooksResponseDto::new)
                .collect(Collectors.toList());
    }
    @Transactional(readOnly = true)
    public List<BooksResponseDto> findAllByAuthor(String author){
        return booksRepository.findAllByAuthor(author).stream()
                .map(BooksResponseDto::new)
                .collect(Collectors.toList());
    }

    public BooksResponseDto findByBookId(int bookId){
        Books entity=booksRepository.findById(bookId).orElseThrow(()->
                new IllegalArgumentException("No Book"));
        return new BooksResponseDto(entity);
    }
}
