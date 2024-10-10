import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../../models/user.model';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    // @todo: will implement DTO later

    @Post()
    create(@Body() user: Partial<User>) {
        return this.userService.createUser(user);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.getUser(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() user: Partial<User>) {
        return this.userService.updateUser(id, user);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.userService.deleteUser(id);
    }
}