package enhancedLibrary.domain;


import enhancedLibrary.web.dto.BooksResponseDto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Optional;

@Getter
@NoArgsConstructor
@Entity
public class Issues {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer issueIndex;

    @Column(length = 45, nullable = false)
    private String guestId;

    @OneToOne
    @JoinColumn(name = "book_id")
    private Books bookId;

    @Column(nullable = false)
    private String startDate;

    @Column(nullable = false)
    private String dueDate;

    @Column(nullable = false)
    private Boolean overdueState;

    @Column(nullable = false)
    private Integer calculatedFine;

    @Builder
    public  Issues(String guestId, Books bookId, String startDate, String dueDate,
                   boolean overdueState, int calculatedFine){
        this.guestId=guestId;
        this.bookId=bookId;
        this.startDate=startDate;
        this.dueDate=dueDate;
        this.overdueState=overdueState;
        this.calculatedFine=calculatedFine;
    }
}
