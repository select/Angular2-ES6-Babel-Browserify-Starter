# Angular 2 + ES6 + SASS starter

Here is a list of all the tools I use for this starter and short comments why I use these tools.

- **Angular2** - because Angular1 is soon deprecated, gotta move on.
- **ES6** - We have a server written in JavaScript, we did not want to introduce another language.
- **Gulp** - I was using Grunt so far but I read Gulp is more readable.
- **SASS** - yes SASS not SCSS, because SASS is better to read.
- **Foundation** - minmal, has SCSS files ... you need somethign to start with.

Why ES6 and not TypeScript? Because we use JavaScript on the server side (not included in this starter)
and we do not want to use 2 languages.

## Usage

```
npm install
gulp dist
npm start
```

To contiously build JS and CSS code use
```
gupl watch
```

## Contributing

I would really appeciate feedback and imporvements since I am not and expert ... yet :P

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

Getting this setup was not as straight forward as I hoped it would be. After searching for my setup
I realized that nobody has published this yet, that's why I'd like to share it with you.


This setup ist not perfect yet and I hope can imporve it over time.

## Credits

Thanks to all the people that worked in the thousands of packages this starter relies on.

## License

MIT
