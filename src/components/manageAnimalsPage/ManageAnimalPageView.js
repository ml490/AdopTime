import React from 'react';
import PropTypes from 'prop-types';
import { Table, Input, Button } from 'semantic-ui-react';

const ManageAnimalPageView = ({ animal, onChange, onSave }) => {
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Animal ID</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Age</Table.HeaderCell>
                        <Table.HeaderCell>Color</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.HeaderCell>{animal.animalId}</Table.HeaderCell>
                        <Table.HeaderCell><Input name="name"  onChange={onChange} value={animal.name} /></Table.HeaderCell>
                        <Table.HeaderCell><Input name="age"   onChange={onChange} value={animal.age} /></Table.HeaderCell>
                        <Table.HeaderCell><Input name="color" onChange={onChange} value={animal.color} /></Table.HeaderCell>
                        <Table.HeaderCell><Input name="description" onChange={onChange} value={animal.description} /></Table.HeaderCell>
                        <Table.HeaderCell><Input name="status" onChange={onChange} value={animal.status} /></Table.HeaderCell>
                    </Table.Row>
                </Table.Body>
            </Table>
            <Button onClick={onSave}>Save</Button>
        </div>
    );
};

ManageAnimalPageView.propTypes = {
    animal: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
};

export default ManageAnimalPageView;