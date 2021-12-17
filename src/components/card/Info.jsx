import {Card} from "react-bootstrap"
import style from "./Info.module.css"
import {Link} from "react-router-dom"

export default function Info({data}) {
    console.log(data)
    return (
        <Card className={style.Card}>
            <Card.Body>
                <Card.Title>
                    <p>test</p>
                    {data.title}
                </Card.Title>
                <Card.Text>
                    {data.Body}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
