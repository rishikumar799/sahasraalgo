import { MoreHorizontal } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Switch } from '@/components/ui/switch';

const mockRules = [
  {
    instrument: 'AAPL',
    condition: 'Price > $175.00',
    action: 'SELL',
    quantity: 10,
    status: 'active',
  },
  {
    instrument: 'GOOGL',
    condition: 'RSI < 30',
    action: 'BUY',
    quantity: 5,
    status: 'active',
  },
  {
    instrument: 'TSLA',
    condition: 'Price < $180.00',
    action: 'BUY',
    quantity: 15,
    status: 'paused',
  },
  {
    instrument: 'BTC-USD',
    condition: 'MACD Crosses Up',
    action: 'BUY',
    quantity: 0.5,
    status: 'active',
  },
  {
    instrument: 'ETH-USD',
    condition: 'Price > $4000',
    action: 'SELL',
    quantity: 2,
    status: 'triggered',
  },
];

export default function RulesTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Status</TableHead>
          <TableHead>Instrument</TableHead>
          <TableHead>Condition</TableHead>
          <TableHead>Action</TableHead>
          <TableHead className="text-right">Quantity</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockRules.map((rule, index) => (
          <TableRow key={index}>
            <TableCell>
              <Switch defaultChecked={rule.status === 'active'} aria-label="Toggle rule status" />
            </TableCell>
            <TableCell className="font-medium">{rule.instrument}</TableCell>
            <TableCell>{rule.condition}</TableCell>
            <TableCell>
              <Badge variant={rule.action === 'BUY' ? 'secondary' : 'destructive'}
                 className={rule.action === 'BUY' ? `bg-green-600/20 text-green-400 border-green-600/30 hover:bg-green-600/30` : ''}>
                {rule.action}
              </Badge>
            </TableCell>
            <TableCell className="text-right">{rule.quantity}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button aria-haspopup="true" size="icon" variant="ghost">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
