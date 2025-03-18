import { performance } from 'perf_hooks';
import { TVShow } from "./TvShow";

type TvMazeShow = {
    id: number,
    name: string
    image: Image
}

type Image = {
    medium: string,
    original: string
}

async function mainFunc() {
    let page = 0
    const tvShowMap: Map<number, TvMazeShow> = new Map()
    
    while(true) {
        page++
        try {
            const url = `https://api.tvmaze.com/shows?page=${page}`
            const response = await fetch(url);
            
            if(!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`)
            }
            
            const data: TVShow[] = await response.json()
    
            if(data.length != 0) {
                const myData = Object.values(data)
                myData.forEach(show => {
                    tvShowMap.set(show.id, {
                        id: show.id,
                        name: show.name,
                        image: {
                            medium: show.image?.medium ?? "", 
                            original: show.image?.original ?? ""
                    }})    
                })
            }
        } catch (error) {
            console.log("error when fetching data ", error)
            break
        }
    }
    console.log(tvShowMap.size)
}

// Wrap in a promise to use the Performance module to measure execution time.
const start = performance.now();
mainFunc().then(() => {
  const end = performance.now();
  console.log(`Execution time: ${Math.floor(end - start)} milliseconds`);
});