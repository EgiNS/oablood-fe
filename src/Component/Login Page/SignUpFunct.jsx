import React, { useState } from 'react'
import { Input, Button, FormGroup, Label, Form } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function SignUpFunct() {
    const [agree, setAgree] = useState(false);

    const checkboxHandler = () => {
        setAgree(!agree);
    }

    return (
        <div>
            <FormGroup check>
                <Input type="checkbox" name="check" id="check" onChange={checkboxHandler} />
                <Link to='/syarat-ketentuan'>
                    <Label for="exampleCheck" id="checklabel" check style={{cursor:"pointer"}}>Saya menyetujui Syarat & Ketentuan yang berlaku</Label>
                </Link>
            </FormGroup>
            <Button disabled={!agree} color="primary" size="lg" block>Daftar</Button>
        </div>
    )
}