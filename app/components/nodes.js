import React from 'react'
import { CardTitle, Table, TableHeader, TableHeaderColumn, TableBody, TableRow, TableRowColumn } from 'material-ui'

export default React.createClass({
  displayName: 'Nodes',

  propTypes: {
    nodes: React.PropTypes.array.isRequired,
    name: React.PropTypes.string.isRequired
  },

  render: function() {
    const widths = {
      address: { width: '15%' },
      port: { width: '12%' },
      metadata: { width: '10%' }
    }

    const numNodes = this.props.nodes.length
    const subtitle = `${numNodes} node${(numNodes > 1) ? 's' : ''}`

    return <div>
      <CardTitle title={this.props.name} subtitle={subtitle} />

      <Table selectable={false}>
        <TableHeader adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn style={widths.address}>Address</TableHeaderColumn>
            <TableHeaderColumn style={widths.port}>Port</TableHeaderColumn>
            <TableHeaderColumn style={widths.metadata}>Metadata</TableHeaderColumn>
          </TableRow>

          {/* Hack to stop checkbox from showing */}
          <TableRow style={{display: 'none'}} />
        </TableHeader>

        <TableBody displayRowCheckbox={false}>
          {this.props.nodes.map((node) => {
            return <TableRow key={node.Id}>
              <TableRowColumn>{node.Id}</TableRowColumn>
              <TableRowColumn style={widths.address}>{node.Address}</TableRowColumn>
              <TableRowColumn style={widths.port}>{node.Port}</TableRowColumn>
              <TableRowColumn style={widths.metadata}>{JSON.stringify(node.MetaData)}</TableRowColumn>
            </TableRow>
          })}
        </TableBody>
      </Table>
    </div>
  }
})
