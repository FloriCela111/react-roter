import axios from 'axios'
import {useEffect, useState} from "react";

const About = () => {
    const [nr1, setNr1] = useState([1,2,3,4,5,6]); // [vlera e numrave tek, vlera e numrave cift], [9,12],
    const [result, setResult] = useState([0, 0]);
    const [nr2, setNr2] = useState([[1, 2, 3], [4, 5, 6]]);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const sum = nr2[0].map((lol, index) =>
            nr2.reduce((acc, curr) => acc + curr[index], 0)
        );
        console.log(sum)
        setResults(sum);
    }, [nr2]);
    useEffect(() => {
        const numbers = nr1.reduce((acc, curr) => {
            if (curr % 2 === 0) {
                acc[1] += curr;
            } else {
                acc[0] += curr;
            }
            return acc;
        },
            [0, 0]
            );
        setResult(numbers);
        console.log(numbers)
    }, [nr1]);

    //gjetja e nr tek

    // const formatData = (array) => {
    //     return array.map((element, index) => {
    //         return  element.src.original
    //     })
    // }
    // const api = () => {
    //     axios.get('https://api.pexels.com/v1/search?query=nature', {
    //         headers: {
    //             Authorization: 'qtzdYbO6rhw0MmWmAjc4v8KuneFpUUECt7OnWNyOIYidgZ0nx7dEemEm'
    //         }
    //     }).then((res) => {
    //         console.log('api: ',res.data.photos)
    //         setImages(formatData(res.data.photos))
    //     })
    // }

    // useEffect(() => {
    //     api()
    // }, [])



  return (
      <div>
          About
          <div>Odd Sum: {result[0]}, Even Sum: {result[1]}</div>
          {/*{images.map((img,index) => (*/}
          {/*    <img src={img} key={index} alt='img' style={{width:"500px",height:"auto"}}/>*/}
          {/*))}*/}
      </div>
  )
}

export default About
