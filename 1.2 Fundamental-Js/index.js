// PROMISES

// const wait = time => new Promise ((resolve) => 
//     setTimeout(resolve, time)
// );

// wait(2000).then(() => console.log(2))
// wait(4000).then(() => console.log(4))
// wait(3000).then(() => console.log(3))
// console.log(1)

const songList = [
    { title: "song title 1", artists: [{ name: "artist name 1" }], duration: 200 },
    { title: "song title 2", artists: [{ name: "artist name 2" }], duration: 200 },
    { title: "song title 3", artists: [{ name: "artist name 3" }], duration: 200 }
]

const wait = time => new Promise ((resolve) => 
    setTimeout(resolve, time)
)


async function getData (data) {
    try {
        wait(1000).then(() => console.log(data))
    } catch (error) {
        console.log("Error " + error)
    }
}

getData(songList);