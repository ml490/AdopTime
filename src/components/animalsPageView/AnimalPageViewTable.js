import React from "react";
import PropTypes from "prop-types";
import { Table, Button } from 'semantic-ui-react';

const AminalPageViewTable = ({animals, onAnimalEdit, onAnimalRemove}) => {
  return (  
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
          {animals.map((animal, i) => {
            return (
              <Table.Row key={i}>
                <Table.Cell>{animal.animalId}</Table.Cell>
                <Table.Cell>{animal.name}</Table.Cell>
                <Table.Cell>{animal.age}</Table.Cell>
                <Table.Cell>{animal.color}</Table.Cell>
                <Table.Cell>{animal.description}</Table.Cell>
                <Table.Cell>{animal.status}</Table.Cell>
                <Table.Cell><Button onClick={() => onAnimalEdit(animal.animalId)}>Edit</Button></Table.Cell>
                <Table.Cell><Button onClick={() => onAnimalRemove(animal.animalId)}>Remove</Button></Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  };

AminalPageViewTable.propTypes = {
  animals: PropTypes.array.isRequired,
  onAnimalEdit: PropTypes.func.isRequired,
  onAnimalRemove: PropTypes.func.isRequired
};

export default AminalPageViewTable;
