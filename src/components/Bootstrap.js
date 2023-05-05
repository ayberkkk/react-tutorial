import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Breadcrumb } from "react-bootstrap";

const Bootstrap = () => {
  return (
    <div className="bootstrap">
      <h3>Bootstrap Component</h3>
      <Button variant="danger">Test</Button>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default Bootstrap;
