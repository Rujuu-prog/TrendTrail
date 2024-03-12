import { Table, Avatar, Group, Text } from '@mantine/core';
import { FaCrown } from 'react-icons/fa';
import classes from './RankingTable.module.css';
import { TableDatum } from '@/types/RankingTable';

interface RankingTableProps {
  tableData: TableDatum;
}

export function RankingTable({ tableData }: RankingTableProps) {
  const headerCells = tableData.head.map((header, index) => (
    <Table.Th key={index}>{header}</Table.Th>
  ));

  const rows = tableData.body.map((row, rowIndex) => (
    <Table.Tr key={rowIndex} className={rowIndex === 0 ? classes.firstRankRow : ''}>
      {row.map((cell, cellIndex) => {
        // セルの内容がオブジェクトで特定のプロパティを持つ場合
        if (cell && typeof cell === 'object' && 'id' in cell && 'name' in cell) {
          return (
            <Table.Td key={cellIndex}>
              <Group gap="sm">
                <Avatar size={24} src={cell.img || null} radius={26} />
                <Text size="sm" fw={500}>
                  {cell.name}
                </Text>
              </Group>
            </Table.Td>
          );
        }
        // セルの内容がオブジェクトでないか特定のプロパティを持たない場合
        return (
          <Table.Td key={cellIndex} className={cellIndex === 0 ? classes.rankCell : ''}>
            {cellIndex === 0 && rowIndex === 0 ? (
              <FaCrown className={classes.rankIcon} size="1.5em" />
            ) : null}
            {typeof cell === 'object' ? '' : cell}
          </Table.Td>
        );
      })}
    </Table.Tr>
  ));

  return (
    <Table className={classes.table} withRowBorders={false} highlightOnHover>
      <Table.Thead>
        <Table.Tr>{headerCells}</Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
