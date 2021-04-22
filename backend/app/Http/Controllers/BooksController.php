<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Exception;
use Illuminate\Http\Request;

class BooksController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $books = Book::paginate(5);

        return response()->json($books);
    }

    function isIsbnValid($isbn){
        if(strlen($isbn) != 10){
            return false;
        }

        $sum = 0;
        
        for($i = 1; $i<=10; $i++){
            $sum += (substr($isbn, ($i-1), 1) * (10 - ($i-1)));
        }
        if($sum % 11 == 0){
            return true;
        }
        return false;
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if(!$this->isIsbnValid($request->input('isbn'))){
            return response()->json(['status'=> 'error', 'message' => 'Invalid ISBN number']);
        }

        if(!$request->input('title')){
            return response()->json(['status'=> 'error', 'message' => 'Input title cannot be blank']);
        }

        if(!$request->input('isbn')){
            return response()->json(['status'=> 'error', 'message' => 'Input isbn cannot be blank']);
        }

        if(!$request->input('publication_date')){
            return response()->json(['status'=> 'error', 'message' => 'Input publication_date cannot be blank']);
        }

        if(!$request->input('status')){
            return response()->json(['status'=> 'error', 'message' => 'Input status cannot be blank']);
        }

    try{
        $b = Book::create([
            'title' => $request->input('title'),
            'isbn' => $request->input('isbn'),
            'publication_date' => $request->input('publication_date'),
            'status' => $request->input('status')
        ]);
        
        return response()->json(['status'=> 'success', 'message' => 'Book sucessfully created']);
        
    }catch(\Exception $e){
        return response()->json(['status'=> 'error', 'message' => 'Invalid Input']);
    }
}

    public function checkBook(Request $r){
        $b = Book::where('isbn', $r->input('isbn'))->first();
        
        if(!$b){
            return response()->json(['status'=> 'error', 'message' => 'ISBN not found.', 'openModal' => false]);
        }

        if($b->status == 'CHECKED_OUT' && $r->input('status') == 'CHECKED_OUT'){
            return response()->json(['status'=> 'error', 'message' => 'This book is not available.', 'openModal' => false]);
        }

        try{ 
            $b->status = $r->input('status');
            $b->save();
            return response()->json(['status'=> 'success', 'message' => 'Book successfully checked-in', 'openModal' => true]);
        }catch(\Exception $e){
            return response()->json(['status'=> 'error', 'message' => 'Invalid input.', 'openModal' => false]);
        }
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
