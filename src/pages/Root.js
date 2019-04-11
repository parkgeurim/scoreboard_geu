export class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                <>
                    <p>공토메뉴 영역</p>
                    <Route path="/" component={Home}></Route>
                    <Route path="/heroes" component={Heroes}></Route>
                    <Route path="/scoreboard" component={Scoreboard}></Route>
                </>
            </BrowserRouter>
        )
    }
}