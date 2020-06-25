# Front End RennScape: An Introduction

The RennScape client-side application is a hub for the online game
of the (presumably) same name. The site is intended to allow players to manage 
and track their characters while viewing their status on the leaderboards. The
site consists of three separately loaded pages:

1. A login page
2. A 404-not found page
3. The main page, consisting of a large majority of the content and interaction

# The Login Page (`/auth/login`)

The login page offers minimum logging features. The single page consists of two
primary components:

- `LoginForm`: A form consisting of two inputs and a submit button. When credentials do not match the server, a 400 code is received and the form displays a warning.
- `LoginInput`: Input components, comprising a (text-type) username field and (password-type) password field.

Upon successful authentication, the user is redirected to the rankings section 
of the main page.

# The Main Page (`/`)

The main page is a single page application (SPA) consisting of three possible views:
a rankings page (public access), a characters page (users and admins), and a 
users page (admin only). Each view has the same general format: a (common) top
navigation bar, a unique sidebar for sub-navigation, and the body of the view
consisting of all pertinent information. 

## The Main Page Store

As a SPA, all information needed for rendering from the server is performed on
initial mount and saved in a global redux store. The store consists of the
followinf state variables:

- `userInfo`: This object is comprised of information yielded from a user status GET request to the server. It consists of the `username`, `role`, and `loggedIn` fields. A value of 2 or greater for `role` indicates admin privileges.
- `rankingsTotal`: A list of character information, sorted by highest combined level.
- `rankingsAttack`: A list of character information, sorted by highest attack level.
- `rankingsStrength`: A list of character information, sorted by highest strength level.
- `rankingsDefence`: A list of character information, sorted by highest defence level.
- `userCharacters`: A list of character information specific to the currently logged user. When logged out, this data is not populated.
- `users`: A composite list of all user information for admin use. When not logged as admin, this data is not populated.

## The (Top) Navbar

The purpose of the navbar is to allow traversal through the primary mainpage 
views, as well as logging out and accessing the login page. The navbar is static
for all views, and consists of the following primary components:

- `NavItem`: A generic tab component that can represent any of the three view options. These tabs are only visible when the client has associated privileges to view them.
- `LoginTab`/`LogoutTab`: Buttons with logging features. Exactly one of the two tabs will be visible at any given time.

## The Rankings View

The purpose of this view is to check the updated rankings of each registered 
character with respect to several stats (attack, strength, defence, and total). 
Each set of rankings is represented in a table pulled from one of the `rankings`
variables in the store and viewed in isolation. Navigation to these tables is 
controlled by a static sidebar. Individual tabs of the sidebar use an `onClick`
event to re-render the body, by calling a `setActiveTab` prop bound to the root
view component. The major components of this view:

- `CharactersSidebar`
    - `RankingsTab`
- `RankingsBody`

## The Characters View (Users and Admins Only)

The purpose of this view is to check on a manage a list of the characters 
belonging to the current client. Each character us represented as a dynamic tab
in the (scrollable) sidebar, which displays major stats of the character in the 
body when clicked. Individual tabs of the sidebar use an `onClick`
event to re-render the body, by calling a `setActiveTab` prop bound to the root
view component. The major components of this view:

- `CharactersSidebar`
    - `CharacterTab`: A generic tab representing one character
- `CharactersBody`
    - `StatCard`: A stylized card consisting of a single stat value

TODO: 
- [ ] Add a bottom-adjusted button that allows users to register a new character

## Users View (Admins Only)

The purpose of this view is to allow admins to review and modify users as is
appropriate. This is the only view that does not require a sidebar for sub-navigation.
In its current state, the users view is read-only, displaying a table of the 
currently registered usernames.

TODO:
- [ ] Add a column to the table consisting of buttons to delete users.
- [ ] Add functionality for admins to delete individual characters as well.
