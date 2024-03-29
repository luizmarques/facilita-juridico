import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpCode } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Customers Routes')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @ApiOperation({ summary: 'Create customer' })
  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }
  
  @ApiOperation({ summary: 'List customers' })
  @Get()
  findAll() {
    return this.customersService.findAll();
  }
  
  @ApiOperation({ summary: 'Show customer' })
  @Get(':id')
  findOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.customersService.findOne(id);
  }
  
  @ApiOperation({ summary: 'Update customer' })
  @Patch(':id')
  update(@Param('id', new ParseIntPipe()) id: number, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customersService.update(id, updateCustomerDto);
  }
  
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete customer' })
  @Delete(':id')
  remove(@Param('id', new ParseIntPipe()) id: number) {
    return this.customersService.remove(id);
  }
}
