import { Table } from "./tabela";

import React from 'react';

export default function Tabela({children}) {
    return (
    <Table>
      {children}
    </Table>
 );
}