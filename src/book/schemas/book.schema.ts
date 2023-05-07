import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Category {
    ADVETURE = 'Adventure',
    CALSSICS = 'Classics',
    CRIME = 'Crime',
    FANTASY = 'Fantasy',
}

@Schema({
    timestamps: true
})
export class Book {

    @Prop()
    title: string;

    @Prop()
    dencrition: string;

    @Prop()
    author: string;

    @Prop()
    price: number;

    @Prop()
    category: Category;

}

export const BookSchema = SchemaFactory.createForClass(Book);