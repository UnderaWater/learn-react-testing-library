const Page = require('./page');

class UsersPage extends Page {
    get loadingTitle() {
        return $('#users-loading')
    }

    get usersList() {
        return $('#users-list')
    }

    get usersItems() {
        return browser.react$$('User');
    }

    async loadData() {
        try {
            await this.open();
            await this.loadingTitle.waitForDisplayed({ timeout: 2000 });
            await this.usersList.waitForDisplayed({ timeout: 2000 });
        } catch (error) {
            throw new Error('failed to load users');
        }
    }

    async deleteUser() {
        try {
            const userCount = await this.usersItems.length;

            if (!userCount) {
                throw new Error('no users found')
            }

            await this.usersItems[0].$('#user-delete').click();

            const userCountAfterDelete = await this.usersItems.length;

            if (userCount - userCountAfterDelete !== 1) {
                throw new Error('Deletion did not occur or more than 1 user has deleted')
            }
        } catch (error) {
            throw new Error('failed to delete user' + error.message)
        }
    }

    open() {
        return super.open('/users-test');
    }
}

module.exports = new UsersPage();