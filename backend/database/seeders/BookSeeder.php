<?php

namespace Database\Seeders;

use App\Models\Book;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Book::create([
            'isbn' => '0005534186',
            'title' => 'The Hill We Climb',
            'publication_date' => '2020-01-01',
            'status' => 'AVAILABLE'
        ]);

        Book::create([
            'isbn' => '0978110196',
            'title' => 'The Four Winds',
            'publication_date' => '2020-02-01',
            'status' => 'AVAILABLE'
        ]);

        Book::create([
            'isbn' => '0978108248',
            'title' => 'Good Company',
            'publication_date' => '2020-03-01',
            'status' => 'AVAILABLE'
        ]);

        Book::create([
            'isbn' => '0978194527',
            'title' => 'The Midnight Library',
            'publication_date' => '2020-04-01',
            'status' => 'AVAILABLE'
        ]);

        Book::create([
            'isbn' => '0978194004',
            'title' => 'The Red Book',
            'publication_date' => '2018-05-01',
            'status' => 'AVAILABLE'
        ]);

        Book::create([
            'isbn' => '0978194985',
            'title' => 'First Person Singular',
            'publication_date' => '2015-06-01',
            'status' => 'AVAILABLE'
        ]);

        Book::create([
            'isbn' => '0978171349',
            'title' => 'Northern Spy by Flynn Berry',
            'publication_date' => '2020-07-01',
            'status' => 'AVAILABLE'
        ]);

        Book::create([
            'isbn' => '0978039912',
            'title' => 'The Invisible Life of Addie Larue by V. E. Schwab',
            'publication_date' => '1978-08-01',
            'status' => 'AVAILABLE'
        ]);

        Book::create([
            'isbn' => '0978031644',
            'title' => 'Win by Harlan Coben',
            'publication_date' => '2020-09-01',
            'status' => 'AVAILABLE'
        ]);

        Book::create([
            'isbn' => '0978168968',
            'title' => 'Klara and the Sun',
            'publication_date' => '2020-10-01',
            'status' => 'AVAILABLE'
        ]);

        Book::create([
            'isbn' => '0978179633',
            'title' => 'You Love Me',
            'publication_date' => '2020-11-01',
            'status' => 'AVAILABLE'
        ]);

        Book::create([
            'isbn' => '0978006232',
            'title' => 'Life after Death',
            'publication_date' => '2020-01-01',
            'status' => 'AVAILABLE'
        ]);

        Book::create([
            'isbn' => '0978195248',
            'title' => 'The Vanishing Half',
            'publication_date' => '2020-01-01',
            'status' => 'AVAILABLE'
        ]);

        Book::create([
            'isbn' => '0978125029',
            'title' => 'Eternal',
            'publication_date' => '2020-01-01',
            'status' => 'AVAILABLE'
        ]);

        Book::create([
            'isbn' => '0978078691',
            'title' => 'The Lost Apothecary',
            'publication_date' => '2020-01-01',
            'status' => 'AVAILABLE'
        ]);

        Book::create([
            'isbn' => '0978152476',
            'title' => 'Broken Horses',
            'publication_date' => '2020-01-01',
            'status' => 'AVAILABLE'
        ]);

        Book::create([
            'isbn' => '0978153871',
            'title' => 'Finding Freedom',
            'publication_date' => '2020-01-01',
            'status' => 'AVAILABLE'
        ]);

        Book::create([
            'isbn' => '0978125010',
            'title' => 'Broken (in the Best Possible Way)',
            'publication_date' => '2020-01-01',
            'status' => 'AVAILABLE'
        ]);

        Book::create([
            'isbn' => '0593139135',
            'title' => 'Beautiful Things',
            'publication_date' => '2020-01-01',
            'status' => 'AVAILABLE'
        ]);
        Book::create([
            'isbn' => '0441013597',
            'title' => 'The Light of Days',
            'publication_date' => '2020-01-01',
            'status' => 'AVAILABLE'
        ]);
        Book::create([
            'isbn' => '3598215002',
            'title' => 'Digital Fortress',
            'publication_date' => '2020-01-01',
            'status' => 'AVAILABLE'
        ]);
        Book::create([
            'isbn' => '3-598-21501-0',
            'title' => 'Deception Point',
            'publication_date' => '2020-01-01',
            'status' => 'AVAILABLE'
        ]);
        Book::create([
            'isbn' => '3598215029',
            'title' => 'Angels & Demons',
            'publication_date' => '2020-01-01',
            'status' => 'AVAILABLE'
        ]);
        Book::create([
            'isbn' => '3598215037',
            'title' => 'Wild Symphony',
            'publication_date' => '2020-01-01',
            'status' => 'AVAILABLE'
        ]);
        Book::create([
            'isbn' => '3598215045',
            'title' => 'Origin',
            'publication_date' => '2020-01-01',
            'status' => 'AVAILABLE'
        ]);
        Book::create([
            'isbn' => '3598215053',
            'title' => 'Inferno',
            'publication_date' => '2020-01-01',
            'status' => 'AVAILABLE'
        ]);
        Book::create([
            'isbn' => '3598215061',
            'title' => 'The Lost Symbol ',
            'publication_date' => '2020-01-01',
            'status' => 'AVAILABLE'
        ]);
        Book::create([
            'isbn' => '3598215088',
            'title' => 'The Dan Brown Enigma',
            'publication_date' => '2020-01-01',
            'status' => 'AVAILABLE'
        ]);
        Book::create([
            'isbn' => '3598215096',
            'title' => 'Another Book',
            'publication_date' => '2020-01-01',
            'status' => 'AVAILABLE'
        ]);
        Book::create([
            'isbn' => '3598215118',
            'title' => 'Bla bla Book',
            'publication_date' => '2020-01-01',
            'status' => 'AVAILABLE'
        ]);

    }
}
