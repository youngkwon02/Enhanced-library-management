package enhancedLibrary.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IssuesRepository extends JpaRepository<Issues, Integer> {
    List<Issues> findAllByGuestId(String guestId);
    Issues findByGuestId(String guestId);
}
