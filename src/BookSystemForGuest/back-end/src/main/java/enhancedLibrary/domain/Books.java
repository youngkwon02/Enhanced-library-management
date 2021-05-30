package enhancedLibrary.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class Books {

    @Id
    private Integer bookId;

    @Column(length = 45, nullable = false)
    private String title;

    @Column(length = 45, nullable = false)
    private String author;

    @Column(length = 1000, nullable = false)
    private String image_path;

    @Column(length = 45, nullable = false)
    private String description;

    @Column
    private Integer price;

    @Column(nullable = false)
    private Integer quantity;

    @Column(length = 45, nullable = false)
    private String location;

    @Column(length = 1000, nullable = false)
    private String ebookFile_path;

    @Column(length = 7, nullable = false)
    private String bookType;

    @Builder
    public Books(Integer bookId, String title, String author, String image_path,
                 String description, Integer price, Integer quantity,
                 String location, String ebookFile_path, String bookType){
        this.bookId=bookId;
        this.title=title;
        this.author=author;
        this.image_path=image_path;
        this.description=description;
        this.price=price;
        this.quantity=quantity;
        this.location=location;
        this.ebookFile_path=ebookFile_path;
        this.bookType=bookType;
    }
}
