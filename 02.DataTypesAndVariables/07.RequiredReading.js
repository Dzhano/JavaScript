function reading(pages, pagesPerHour, days){
    let hours = pages / pagesPerHour;

    /* Explanation
    console.log(`Total time to read the book: ${pages} pages / ${pagesPerHour} pages per hour = ${hours} hours`);
    console.log(`Required hours per day: ${hours} hours / ${days} days = ${hours / days} hours per day `);*/
    console.log(hours / days);
}