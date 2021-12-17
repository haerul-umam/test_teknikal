import {Card, Button} from "react-bootstrap"
import style from "./Info.module.css"
import {Link} from "react-router-dom"

export default function Info({data}) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    {data.title}
                </Card.Title>
                <Card.Text>
                    {data.Body}
                </Card.Text>
                <Button variant="primary">Detail</Button>
            </Card.Body>
        </Card>
    )
}
