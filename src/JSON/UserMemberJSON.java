package JSON;

import Models.UserMemberModel;

    public class UserMemberJSON extends JSONItem implements ModifiableItem
    {
        private String username;
        public String getUsername() {
            return username;
        }
        public UserMemberJSON(UserMemberModel model)
        {
            this.username = model.getUsername();
        }
        public UserMemberJSON()
        {
            this.username = null;
        }
    }
