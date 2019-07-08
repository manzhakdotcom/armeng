<?php

// PostController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\StationCollection;
use App\Station;

class StationController extends Controller
{
    
    public function index()
    {
      return new StationCollection(Station::all());
    }

}