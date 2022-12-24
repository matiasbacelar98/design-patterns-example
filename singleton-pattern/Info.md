# Singleton pattern

The Singleton pattern is a design pattern where the idea is to only have <strong>a Single Object</strong> which state is share across multiple objects.

Can only exist one instance of this object for the whole application.

<img src='https://cdn-media-1.freecodecamp.org/images/1*GOAK3XdRvjrcpX9dq0fUrQ.png' />

#### Pros

- Helps to save memory (only one instance)
- Only one source of information
- Can be useful for building loggers, database connections or global configurations

#### Cons

- May introduce unnecessary restrictions
- Singletons are available anywhere in the app by anything, developers may need to know the inner workings of the singleton
- May be difficult to test
