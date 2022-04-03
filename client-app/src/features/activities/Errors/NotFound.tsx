import React from "react";
import { Header, Icon, Segment } from "semantic-ui-react";

export default function NotFound(){
    return (
        <Segment placeholder>
            <Header icon>
                <Icon name='search' />
                These are not the Droids you are looking for.
            </Header>
        </Segment>
    )
}