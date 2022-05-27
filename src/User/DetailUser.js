import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import {
    useParams, useHistory
} from "react-router-dom";
import { Card,Button  } from 'antd';

function Details() {
    let { slug } = useParams();
    const history = useHistory();
    const [details, setDetails] = useState({});
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${slug}`)
            .then(res => {
                setDetails(res.data);
            })
    }, [slug]);
    const handlePrev = () => {
        history.push('/');
    }

    return (
        <div className="site-card-border-less-wrapper" key={slug}>
            <Card title={details.username} bordered={false} style={{ width: 500 }}>
                <p>{details.Name}</p>
                <p>{details.email}</p>
            </Card>
            <Button type="primary" onClick={handlePrev}>Prev</Button>
        </div>
  );
}
export default Details;