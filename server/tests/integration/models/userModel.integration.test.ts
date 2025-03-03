
const mockingoose = require("mockingoose");
import User from '../../../src/models/userModel'; // Your User model
import { IUser } from '../../../src/interfaces/IUser';
import { validateStringEquality, validateNotEmpty } from '../../validators';
const users = require("../../__mocks__/users")

describe('User Model', () => {
    // Create
  describe("create User", ()=>{
    test('should create a new user', async () => {

      //Arrange
      let mockUser0 : IUser =  users[0];
      const user = new User(mockUser0);
        
      //Act  
      mockingoose(User).toReturn(user, 'save');      
      const {email, username, phone, password} = await user.save();
      let savedUser : IUser = {email,username,phone,password}

      //Assert
      validateNotEmpty(savedUser)
      
    });

    test('should have property', async () => {

      //Arrange
      let mockUser1 : IUser =  users[1];
      const user = new User(mockUser1);
        
      //Act  
      mockingoose(User).toReturn(user, 'save');      
      const savedUser = await user.save();

      //Assert
      expect(savedUser).toHaveProperty("_id");
      expect(savedUser).toHaveProperty("username");
      expect(savedUser).toHaveProperty("email");
      expect(savedUser).toHaveProperty("password");
      expect(savedUser).toHaveProperty("phone");
      
    });

    test('created User fields should be equal to mock User', async () => {

      //Arrange
      let mockUser3 : IUser =  users[3];
      const user = new User(mockUser3);
        
      //Act  
      mockingoose(User).toReturn(user, 'save');      
      const savedUser = await user.save();

      //Assert
      validateStringEquality(savedUser?.email,user.email);
      validateStringEquality(savedUser?.phone,user.phone);
      validateStringEquality(savedUser?.username,user.username);
      validateStringEquality(savedUser?.username,user.username);
        
    });

  })
  
  // Read
  describe("Read User", ()=>{
    test('should find all Users', async () => {
      
      //Arrange
      let mockUsers =  users 
      
      //Act
      mockingoose(User).toReturn(mockUsers, 'find');
      const foundUsers  = await User.find();

      //Assert
      expect(foundUsers.length).toBe(4)
      expect(foundUsers).toBeDefined()
      
  
    });

    test('should find a user by id', async () => {
      
      //Arrange
      let mockUser0 : IUser =  users[0];        
      const user0 = new User(mockUser0);

      //Act
      mockingoose(User).toReturn(user0, 'findOne');
      const foundUser  = await User.findById(user0._id);
      
      //Assert
      expect(foundUser).toHaveProperty("_id");
      expect(foundUser).toHaveProperty("username");
      expect(foundUser).toHaveProperty("email");
      expect(foundUser).toHaveProperty("password");
      expect(foundUser).toHaveProperty("phone");

      validateStringEquality(foundUser?.email,user0.email);
      validateStringEquality(foundUser?.phone,user0.phone);
      validateStringEquality(foundUser?.username,user0.username);
      validateStringEquality(foundUser?.username,user0.username);
  
    });
  });

  // Update
  describe("Update User", ()=>{

    test('should update a user', async () => {

      //Arrange
      const user : IUser =  users[0];   
      const mockUser0 = await new User(user).save();

      //Act
      mockingoose(User).toReturn(mockUser0, 'findOneAndUpdate');
      const updatedUser = await User.findOneAndUpdate(
        { _id: mockUser0._id },
        { username: 'Dark Knight' },
        { new: true }
      );

      //Assert
      expect(updatedUser?._id).toEqual(mockUser0._id);
      validateStringEquality(updatedUser?.username,mockUser0.username)

    });

    test('should have all properties', async () => {

      //Arrange
      const user : IUser =  users[0];   
      const mockUser0 = await new User(user).save();

      //Act
      mockingoose(User).toReturn(mockUser0, 'findOneAndUpdate');
      const updatedUser = await User.findOneAndUpdate(
        { _id: mockUser0._id },
        { username: 'Dark Knight' },
        { new: true }
      );

      //Assert
      expect(updatedUser).toHaveProperty("email");
      expect(updatedUser).toHaveProperty("password");
      expect(updatedUser).toHaveProperty("phone");

    });

  });

  // Delete
  describe("Delete User", ()=>{

    test('return correct mock for deleted User', async () => {
      
      //Arrange
      const user = users[0];
      let deleteUser = new User(user);
      
      //Act
      mockingoose(User).toReturn(deleteUser, 'deleteOne');
      let result = await User.deleteOne({ name: 'test' });  
      
      //Assert
      expect(result).toBe(deleteUser);
    });

    test('should delete a user by id', async () => {
      
      //Arrange
      let mockUser0 : IUser =  users[0];        
      const user0 = new User(mockUser0);

      //Act
      mockingoose(User).toReturn(user0, 'findOneAndDelete');
      const deletedUser  = await User.findOneAndDelete({_id : user0._id});
      
      //Assert
      expect(deletedUser).toMatchObject(user0);
  
    });
  });

});
