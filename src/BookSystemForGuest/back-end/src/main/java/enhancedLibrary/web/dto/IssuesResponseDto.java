package enhancedLibrary.web.dto;

import enhancedLibrary.domain.Issues;
import lombok.Getter;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Getter
public class IssuesResponseDto {
    private String guestId;
    private int bookId;
    private String title;
    private String author;
    private String bookType;
    private String startDate;
    private String dueDate;
    private String imagePath;
    private boolean overdueState;
    private int calculatedFine;
    /*Date today=new Date();
    String startDate = new SimpleDateFormat("YYYY-MM-dd").format(today);
    Date due = new Date(today.getTime() + 14*(1000 * 60 * 60 * 24));
    String dueDate=new SimpleDateFormat("YYYY-MM-dd").format(due);*/
    public IssuesResponseDto(Issues entity) {
        Date today=new Date();
        this.guestId=entity.getGuestId();
        this.bookId=entity.getBookId().getBookId();
        this.title=entity.getBookId().getTitle();
        this.author=entity.getBookId().getAuthor();
        this.bookType=entity.getBookId().getBookType();
        this.startDate=entity.getStartDate();
        this.dueDate=entity.getDueDate();
        this.imagePath=entity.getBookId().getImage_path();
        try {
            Date due=new SimpleDateFormat("yyyy-MM-dd").parse(dueDate);
            this.overdueState = today.after(due);
            if(this.overdueState) {
                Long num=(today.getTime()-due.getTime())/(1000 * 60 * 60 * 24);
                this.calculatedFine =num.intValue()*1000;
            }else{
                this.calculatedFine=entity.getCalculatedFine();
            }
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
