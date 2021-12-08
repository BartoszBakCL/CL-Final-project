import React, {useEffect, useState} from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCuK5cNzv_wDeVqdcVhkdV-1y7rYUYZPyk",
    authDomain: "cl-final-project-b381f.firebaseapp.com",
    projectId: "cl-final-project-b381f",
    storageBucket: "cl-final-project-b381f.appspot.com",
    messagingSenderId: "634623111264",
    appId: "1:634623111264:web:e998e37de04e01c2cb1305"
};
// init firebase app
initializeApp(firebaseConfig)

//init services
const db = getFirestore()

const Pushups = () => {

    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const [data4, setData4] = useState([]);
    const [data5, setData5] = useState([]);
    const [data6, setData6] = useState([]);
    const [visible, setVisible] = React.useState(false);
    const [visible1, setVisible1] = React.useState(false);
    const [visible2, setVisible2] = React.useState(false);
    const [visible3, setVisible3] = React.useState(false);
    const [visible4, setVisible4] = React.useState(false);
    const [visible5, setVisible5] = React.useState(false);
    const [visible6, setVisible6] = React.useState(false);

    useEffect(() =>
            onSnapshot(collection(db, "Pullup0-4"), (snapshot) =>
                setData1(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            ),
        []
    );
    useEffect(() =>
            onSnapshot(collection(db, "Pullup5-8"), (snapshot) =>
                setData3(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            ),
        []
    );
    useEffect(() =>
            onSnapshot(collection(db, "Pullup9-11"), (snapshot) =>
                setData(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            ),
        []
    );
    useEffect(() =>
            onSnapshot(collection(db, "Pullup12-15"), (snapshot) =>
                setData2(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            ),
        []
    );
    useEffect(() =>
            onSnapshot(collection(db, "Pullup16-20"), (snapshot) =>
                setData4(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            ),
        []
    );
    useEffect(() =>
            onSnapshot(collection(db, "Pullup21-25"), (snapshot) =>
                setData5(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            ),
        []
    );
    useEffect(() =>
            onSnapshot(collection(db, "Pullup26-30"), (snapshot) =>
                setData6(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            ),
        []
    );



    return (
        <div className="pullup__container">
            <h1>Pull-ups</h1>
            <div>
                <h2>If your max reps is less then 4</h2>
                <button className="btn__pull btn__0-4" onClick={() => setVisible(!visible)}>
                    {visible ? 'Hide' : 'Show'}
                </button>
                {visible &&
                <section style={{display: "block"}}>
                    <h3>(just lowering yourself from stick)</h3>
                    <ul className="pullup__nav">
                        {data1.map((data) => (
                            <li className="pullup__list" key={data.id}>
                                {data.id}<br/>{data.value}<br/>{data.value2}<br/>{data.value3}<br/>{data.value4}<br/>{data.value5}
                            </li>
                        ))}
                    </ul>
                </section>
                }
            </div>
            <div>
                <h2>If your max reps is between 5-8</h2>
                <button className="btn__pull btn__5-8" onClick={() => setVisible1(!visible1)}>
                    {visible1 ? 'Hide' : 'Show'}
                </button>
                {visible1 &&
                <section>
                    <ul className="pullup__nav">
                        {data3.map((data) => (
                            <li className="pullup__list" key={data.id}>
                                {data.id}<br/>{data.value}<br/>{data.value2}<br/>{data.value3}<br/>{data.value4}<br/>{data.value5}
                            </li>
                        ))}
                    </ul>
                </section>
                }
            </div>
            <div>
                <h2>If your max reps is between 9-11</h2>
                <button className="btn__pull btn__9-11" onClick={() => setVisible2(!visible2)}>
                    {visible2 ? 'Hide' : 'Show'}
                </button>
                {visible2 &&
                <section>
                    <ul className="pullup__nav">
                        {data.map((data) => (
                            <li className="pullup__list" key={data.id}>
                                {data.id}<br/>{data.value}<br/>{data.value2}<br/>{data.value3}<br/>{data.value4}<br/>{data.value5}
                            </li>
                        ))}
                    </ul>
                </section>
                }
            </div>
            <div>
                <h2>If your max reps is between 12-15</h2>
            <button className="btn__pull btn__12-15" onClick={() => setVisible3(!visible3)}>
                {visible3 ? 'Hide' : 'Show'}
            </button>
                {visible3 &&
                <section>
                    <ul className="pullup__nav">
                        {data2.map((data2) => (
                            <li className="pullup__list" key={data2.id}>
                                {data2.id}<br/>{data2.value}<br/>{data2.value2}<br/>{data2.value3}<br/>{data2.value4}<br/>{data2.value5}
                            </li>
                        ))}
                    </ul>
                </section>
                }
                </div>
            <div>
                <h2>If your max reps is between 16-20</h2>
                <button className="btn__pull btn__16-20" onClick={() => setVisible4(!visible4)}>
            {visible4 ? 'Hide' : 'Show'}
                </button>
                {visible4 &&
                <section>
                    <ul className="pullup__nav">
                        {data4.map((data) => (
                            <li className="pullup__list" key={data.id}>
                                {data.id}<br/>{data.value}<br/>{data.value2}<br/>{data.value3}<br/>{data.value4}<br/>{data.value5}
                            </li>
                        ))}
                    </ul>
                </section>
                }
                </div>
            <div>
                <h2>If your max reps is between 21-25</h2>
                <button className="btn__pull btn__21-25" onClick={() => setVisible5(!visible5)}>
            {visible5 ? 'Hide' : 'Show'}
                </button>
                {visible5 &&
                <section>
                    <ul className="pullup__nav">
                        {data5.map((data) => (
                            <li className="pullup__list" key={data.id}>
                                {data.id}<br/>{data.value}<br/>{data.value2}<br/>{data.value3}<br/>{data.value4}<br/>{data.value5}<br/>{data.value6}<br/>{data.value7}<br/>{data.value8}
                            </li>
                        ))}
                    </ul>
                </section>
                }
                </div>
                <div>
                <h2>If your max reps is between 26-30</h2>
                <button className="btn__pull btn__26-30" onClick={() => setVisible6(!visible6)}>
            {visible6 ? 'Hide' : 'Show'}
                </button>
            {visible6 &&
            <section>
                <ul className="pullup__nav">
                    {data6.map((data) => (
                        <li className="pullup__list" key={data.id}>
                            {data.id}<br/>{data.value}<br/>{data.value2}<br/>{data.value3}<br/>{data.value4}<br/>{data.value5}<br/>{data.value6}<br/>{data.value7}<br/>{data.value8}
                        </li>
                    ))}
                </ul>
            </section>
                }
                </div>
        </div>
    );
};

export default Pushups;