<?php

if (! function_exists('env')) {	
    /**
     * Helper function that helps to retrive the
     * env keys from the .env file.
     */
    function env($key) {
        return getenv($key);
    }
}

if (! function_exists('dd')) {
    /**
     * Helper function to shorten the syntax of var dumping
     * to the browser and dying.
     */ 
    function dd($variable) {
	var_dump($variable);
        die();
    }
}

