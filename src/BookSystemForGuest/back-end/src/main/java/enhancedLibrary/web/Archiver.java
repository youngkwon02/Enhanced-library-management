package enhancedLibrary.web;

import enhancedLibrary.web.dto.IssueSaveRequestDto;
import org.springframework.stereotype.Component;
import java.text.SimpleDateFormat;
import java.util.Date;

@Component
public class Archiver {
    Date today=new Date();
    String startDate = new SimpleDateFormat("yyyy-MM-dd").format(today);
    Date due = new Date(today.getTime() + 14*(1000 * 60 * 60 * 24));
    String dueDate=new SimpleDateFormat("yyyy-MM-dd").format(due);

    public IssueSaveRequestDto generateIssue(IssueSaveRequestDto issueRequest){
        IssueSaveRequestDto issueData=new IssueSaveRequestDto();
        issueData.setGuestId(issueRequest.getGuestId());
        issueData.setBookId(issueRequest.getBookId());

        issueData.setStartDate(startDate);
        issueData.setDueDate(dueDate);
        issueData.setOverdueState(false);
        issueData.setCalculatedFine(0);
        return  issueData;
    }
}
