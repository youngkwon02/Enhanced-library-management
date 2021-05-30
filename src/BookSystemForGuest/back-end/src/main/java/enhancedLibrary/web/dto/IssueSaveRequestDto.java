package enhancedLibrary.web.dto;

import enhancedLibrary.domain.Books;
import enhancedLibrary.domain.Issues;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Optional;

@Getter
@Setter
@NoArgsConstructor
public class IssueSaveRequestDto{
    private String guestId;
    private int bookId;
    private String startDate;
    private String dueDate;
    private boolean overdueState;
    private int calculatedFine;

    @Builder
    public  IssueSaveRequestDto(String guestId, int bookId, String startDate, String dueDate,
                                boolean overdueState, int calculatedFine){
        this.guestId=guestId;
        this.bookId=bookId;
        this.startDate=startDate;
        this.dueDate=dueDate;
        this.overdueState=overdueState;
        this.calculatedFine=calculatedFine;
    }

    public Issues toEntity(Books books){
        return Issues.builder()
                .guestId(guestId)
                .bookId(books)
                .startDate(startDate)
                .dueDate(dueDate)
                .overdueState(overdueState)
                .calculatedFine(calculatedFine)
                .build();
    }

}
