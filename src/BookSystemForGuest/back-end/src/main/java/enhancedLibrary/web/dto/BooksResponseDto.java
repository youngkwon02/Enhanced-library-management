package enhancedLibrary.web.dto;

import enhancedLibrary.domain.Books;
import lombok.Getter;

@Getter
public class BooksResponseDto {
    private int bookid;
    private String title;
    private String author;
    private String image_path;
    private String description;
    private int price;
    private int quantity;
    private String location;
    private String bookType;
    private String ebookFile_path;

    public BooksResponseDto(Books entity){
        this.bookid=entity.getBookId();
        this.title=entity.getTitle();
        this.author=entity.getAuthor();
        this.image_path=entity.getImage_path();
        this.description=entity.getDescription();
        this.price=entity.getPrice();
        this.quantity=entity.getQuantity();
        this.location=entity.getLocation();
        this.bookType=entity.getBookType();
        this.ebookFile_path=entity.getEbookFile_path();
    }

    public Books toEntity(){
        return Books.builder()
                .bookId(bookid)
                .title(title)
                .author(author)
                .image_path(image_path)
                .description(description)
                .price(price)
                .quantity(quantity)
                .location(location)
                .bookType(bookType)
                .ebookFile_path(ebookFile_path)
                .build();
    }
}
