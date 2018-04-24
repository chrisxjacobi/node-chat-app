const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [
      {
        id: '1',
        name: 'chris',
        room: 'Node course'
      }, {
        id: '2',
        name: 'michelle',
        room: 'react course'
      }, {
        id: '3',
        name: 'sunny',
        room: 'Node course'
      }
    ]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Chris',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return names for node course', () => {
    var userList = users.getUserList("Node course");

    expect(userList).toEqual(['chris', 'sunny']);
  });

  it('should return names for react course', () => {
    var userList = users.getUserList("react course");

    expect(userList).toEqual(['michelle']);
  });

  it('should remove a user', () => {
    var userID = '1';
    var user = users.removeUser(userID);

    expect(user.id).toBe(userID);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var userID = '999';
    var user = users.removeUser(userID);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find a user by id', () => {
    var userID = '1';
    var user = users.getUser(userID);

    expect(user.id).toBe(userID);
  });

  it('should not find user by invalid id', () => {
    var userID = '456';
    var user = users.getUser(userID);

    expect(user).toNotExist();
  });
});
