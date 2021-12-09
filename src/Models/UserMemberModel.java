package Models;

import java.util.Date;
import java.util.List;
import hash.HashPassword;
import com.cs_2.jsons.JSONEntities.JSONItem;
import com.cs_2.jsons.JSONEntities.UserMemberJSON;
import com.cs_2.jsons.responses.RegReq;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;
import javax.persistence.*;

    public class UserMemberModel extends DatabaseModel implements JSONable
    {

        //TODO: Ensure that non-nullable items are marked as non-nullable

        /**
         * Private Instance variable for index of user/member
         */
        @Id
        @Column(nullable = false)
        private Long usermemberindex;
        /**
         * Private Instance variable for username of a user
         */
        @Column(unique = true, nullable = false)
        private String username;

        /**
         * Private Instance variable for password of a user
         */
        @Column(nullable = false)
        private String password;

        /**
         * Private Instance variable for salt of a user's password
         */
        @Column(nullable = false)
        private String salt;

        /**
         * Creates a UserMember with the specified parameters
         * @param username The username
         */
        public UserMemberModel(String username, String firstName, String lastName, String password)
        {
            this.username = username;
            hashAndSetPassword(password);
        }

        /**
         * Constructor that creates a default user that calls a method to autofill
         * details of the user
         */
        public UserMemberModel()
        {
            this.username = null;
            this.password = null;
        }

        /**
         * Note: This method create a default password of "password"
         * @param json
         */
        public UserMemberModel(UserMemberJSON json)
        {
            this.username = json.getUsername();
            hashAndSetPassword("password");
        }

        public void createUserMember(RegReq regReq)
        {
            this.username = regReq.getUsername();
        }

        /**
         * Gets the username of the user
         * @return
         * Returns the username
         */
        public String getUsername()
        {
            return username;
        }


        /**
         * Makes a call and sets the hash and salt from given password
         * @param password
         */
        private void hashAndSetPassword(String password) {
            HashPassword hp = new HashPassword();

            this.salt = hp.getSalt();
            this.password = hp.setHashedPassword(password, this.salt);
        }

        /**
         * Checks if password matches password given
         * @param password
         * @return
         * Returns true if passwords match, else return false
         */
        public boolean checkPassword(String password) {

            HashPassword hp = new HashPassword();

            String givenPassword = hp.setHashedPassword(password, this.salt);

            if(givenPassword.equals(this.password)) {
                return true;
            } else {
                return false;
            }

        }

        //TODO: implement this

        /**
         * Changes the user's first and last name upon request
         * Updates lastEdit
         * @param lastName
         * @param firstName
         */
        public void changeName(String lastName, String firstName) {
            this.firstName = firstName;
            this.lastName = lastName;

            Date currDateTime = new Date();
            this.lastEdit = currDateTime.getTime();
        }

        //TODO: implement this

        /**
         * Changes the password of a user
         * Updates lastEdit and lastLogin
         * @param newpassword
         */
        public void changePassword(String newpassword) {
            this.password = newpassword;
            Date currDateTime = new Date();
            this.lastEdit = currDateTime.getTime();
        }

        /**
         * Updates lastLogin and creates a new DateTime
         */
        public void setSuccessfulLogin() {
            Date currDateTime = new Date();
            this.lastLogin = currDateTime.getTime();
        }

        /**
         * Checks to see if the user is an admin
         * @return
         * True: If the user is an admin
         * False: If the user is not an admin
         */
        public int isAdmin()
        {
            return this.isAdmin;
        }

        //TODO: ensure owner is created and set properly
//    @Override
//    protected void setCreator(UserMemberModel userMember) {
//        //nothing here. User is own creator. Edit if not true
//    }

        /**
         * Gets a list of all the teams
         * @return
         * Returns a list of teams
         */
        public List<TeamModel> getTeams() {
            return this.teams;
        }

        /**
         * Adds a team to the team list
         * @param team
         */
        public void addTeam(TeamModel team) {
            this.teams.add(team);
        }

        public void removeTeam(TeamModel team) {
            this.teams.remove(team);
        }

        /**
         * Makes the user into an Admin
         */
        public void makeAdmin() {
            this.isAdmin = 1;
        }

        @Override
        public JSONItem toJSON() {
            UserMemberJSON json = new UserMemberJSON(this);
            return json;
        }
    }
}
