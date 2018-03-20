## How to contribute to microrr Framework

#### **Did you find a bug?**

* **Do not open up a GitHub issue if the bug is a security vulnerability** and instead send an email with details to [security@microrr.org](mailto:security@microrr.org).

* **Ensure the bug was not already reported** by searching on GitHub under [Issues](https://github.com/erolms/microrr/issues).

* If you're unable to find an open issue addressing the problem, [open a new one](https://github.com/erolms/microrr/issues/new). Be sure to include a **title and clear description**, as much relevant information as possible demonstrating the expected behavior that is not occurring.

#### **Did you write a patch that fixes a bug?**

* Open a new GitHub pull request with the patch.

* Ensure the PR description clearly describes the problem and solution. Include the relevant issue number if applicable.

#### **Do you intend to add a new feature or change an existing one?**

* Get in contact with the Authors of the Framework and discuss your intentions.

* Follow the PR procedure above.

#### **How to create a Pull Request?**

1. Fork it
2. Run `npm install`
3. Create your feature or patch branch (`git checkout -b my-new-feature-or-patch`)
4. Commit your changes (`git commit -am 'Added some feature/patch'`)
5. Run `npm test`
6. Push to the branch (`git push origin my-new-feature-or-patch`)
7. Create new Pull Request

#### **Testing**

We use [mocha](https://github.com/mochajs/mocha) and [chai](https://github.com/chaijs/chai) to write BDD tests. Run our test suite with this command:

```
npm test
```

## Code Style

We use [tslint](https://github.com/palantir/tslint) to maintain code style and best practices. Please make sure your PR adheres to the guides by running:

```
npm run tslint
```

#### **Do you have questions about the source code?**

* Get in contact with the Authors of the Framework. Alternatives like Slack are currently being reviewed.

Thanks!

microrr Team
