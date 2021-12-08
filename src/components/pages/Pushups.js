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
    const [data7, setData7] = useState([]);
    const [data8, setData8] = useState([]);
    const [data9, setData9] = useState([]);
    const [data10, setData10] = useState([]);
    const [data11, setData11] = useState([]);

    useEffect(() =>
            onSnapshot(collection(db, "Training0-5"), (snapshot) =>
                setData1(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            ),
        []
    );
    useEffect(() =>
            onSnapshot(collection(db, "Training6-10"), (snapshot) =>
                setData3(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            ),
        []
    );
    useEffect(() =>
        onSnapshot(collection(db, "Traning11-20"), (snapshot) =>
        setData(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
        ),
        []
    );
    useEffect(() =>
            onSnapshot(collection(db, "Training21-25"), (snapshot) =>
                setData2(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            ),
        []
    );
    useEffect(() =>
            onSnapshot(collection(db, "Training26-30"), (snapshot) =>
                setData4(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            ),
        []
    );
    useEffect(() =>
            onSnapshot(collection(db, "Training31-35"), (snapshot) =>
                setData5(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            ),
        []
    );
    useEffect(() =>
            onSnapshot(collection(db, "Training36-40"), (snapshot) =>
                setData6(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            ),
        []
    );
    useEffect(() =>
            onSnapshot(collection(db, "Training41-45"), (snapshot) =>
                setData7(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            ),
        []
    );
    useEffect(() =>
            onSnapshot(collection(db, "Training46-50"), (snapshot) =>
                setData8(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            ),
        []
    );
    useEffect(() =>
            onSnapshot(collection(db, "Training51-55"), (snapshot) =>
                setData9(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            ),
        []
    );
    useEffect(() =>
            onSnapshot(collection(db, "Training56-60"), (snapshot) =>
                setData10(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            ),
        []
    );
    useEffect(() =>
            onSnapshot(collection(db, "Training60+"), (snapshot) =>
                setData11(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            ),
        []
    );



    return (
        <div className="pushup__container">
            <h1>Push-ups</h1>
            <section>
                <h2>If your max reps is between 0-5</h2>
                <ul className="pushup__nav">
                    {data1.map((data) => (
                        <li className="pushup__list" key={data.id}>
                            {data.id}<br/>{data.value}<br/>{data.value2}<br/>{data.value3}<br/>{data.value4}<br/>{data.value5}
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>If your max reps is between 6-10</h2>
                <ul className="pushup__nav">
                    {data3.map((data) => (
                        <li className="pushup__list" key={data.id}>
                            {data.id}<br/>{data.value}<br/>{data.value2}<br/>{data.value3}<br/>{data.value4}<br/>{data.value5}
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>If your max reps is between 11-20</h2>
            <ul className="pushup__nav">
                {data.map((data) => (
                    <li className="pushup__list" key={data.id}>
                        {data.id}<br/>{data.value}<br/>{data.value2}<br/>{data.value3}<br/>{data.value4}<br/>{data.value5}
                    </li>
                ))}
            </ul>
            </section>
            <section>
                <h2>If your max reps is between 21-25</h2>
            <ul className="pushup__nav">
                {data2.map((data2) => (
                    <li className="pushup__list" key={data2.id}>
                        {data2.id}<br/>{data2.value}<br/>{data2.value2}<br/>{data2.value3}<br/>{data2.value4}<br/>{data2.value5}
                    </li>
                ))}
            </ul>
            </section>
            <section>
                <h2>If your max reps is between 26-30</h2>
                <ul className="pushup__nav">
                    {data4.map((data) => (
                        <li className="pushup__list" key={data.id}>
                            {data.id}<br/>{data.value}<br/>{data.value2}<br/>{data.value3}<br/>{data.value4}<br/>{data.value5}
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>If your max reps is between 31-35</h2>
                <ul className="pushup__nav">
                    {data5.map((data) => (
                        <li className="pushup__list" key={data.id}>
                            {data.id}<br/>{data.value}<br/>{data.value2}<br/>{data.value3}<br/>{data.value4}<br/>{data.value5}<br/>{data.value6}<br/>{data.value7}<br/>{data.value8}
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>If your max reps is between 36-40</h2>
                <ul className="pushup__nav">
                    {data6.map((data) => (
                        <li className="pushup__list" key={data.id}>
                            {data.id}<br/>{data.value}<br/>{data.value2}<br/>{data.value3}<br/>{data.value4}<br/>{data.value5}<br/>{data.value6}<br/>{data.value7}<br/>{data.value8}
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>If your max reps is between 41-45</h2>
                <ul className="pushup__nav">
                    {data7.map((data) => (
                        <li className="pushup__list" key={data.id}>
                            {data.id}<br/>{data.value}<br/>{data.value2}<br/>{data.value3}<br/>{data.value4}<br/>{data.value5}<br/>{data.value6}<br/>{data.value7}<br/>{data.value8}
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>If your max reps is between 46-50</h2>
                <ul className="pushup__nav">
                    {data8.map((data) => (
                        <li className="pushup__list" key={data.id}>
                            {data.id}<br/>{data.value}<br/>{data.value2}<br/>{data.value3}<br/>{data.value4}<br/>{data.value5}<br/>{data.value6}<br/>{data.value7}<br/>{data.value8}
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>If your max reps is between 51-55</h2>
                <ul className="pushup__nav">
                    {data9.map((data) => (
                        <li className="pushup__list" key={data.id}>
                            {data.id}<br/>{data.value}<br/>{data.value2}<br/>{data.value3}<br/>{data.value4}<br/>{data.value5}<br/>{data.value6}<br/>{data.value7}<br/>{data.value8}<br/>{data.value9}
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>If your max reps is between 56-60</h2>
                <ul className="pushup__nav">
                    {data10.map((data) => (
                        <li className="pushup__list" key={data.id}>
                            {data.id}<br/>{data.value}<br/>{data.value2}<br/>{data.value3}<br/>{data.value4}<br/>{data.value5}<br/>{data.value6}<br/>{data.value7}<br/>{data.value8}<br/>{data.value9}
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>If your max reps is more then 60</h2>
                <ul className="pushup__nav">
                    {data11.map((data) => (
                        <li className="pushup__list" key={data.id}>
                            {data.id}<br/>{data.value}<br/>{data.value2}<br/>{data.value3}<br/>{data.value4}<br/>{data.value5}<br/>{data.value6}<br/>{data.value7}<br/>{data.value8}<br/>{data.value9}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Pushups;