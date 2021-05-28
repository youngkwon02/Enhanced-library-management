package enhancedLibrary.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BooksRepository extends JpaRepository<Books, Integer> {
    @Query("SELECT b FROM Books b")
    List<Books> findAll();

    Books findByBookId(Integer bookId);

    @Query("SELECT b FROM Books b WHERE b.title LIKE :title%")
    List<Books> findAllByTitle(String title);

    @Query("SELECT b FROM Books b WHERE b.author LIKE :author%")
    List<Books> findAllByAuthor(String author);
}
