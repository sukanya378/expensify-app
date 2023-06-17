'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: ['Thing One', 'Thing Two', 'Thing Three']
        };
        _this.handleAddOptionClick = _this.handleAddOptionClick.bind(_this);
        _this.handleRemoveAllClick = _this.handleRemoveAllClick.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.onRemoveIndividual = _this.onRemoveIndividual.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {}
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length === this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
    }, {
        key: 'handleAddOptionClick',
        value: function handleAddOptionClick(option) {

            if (!option.trim()) return 'Please enter a valid option';else if (this.state.options.indexOf(option) > -1) return 'The option already exists';

            this.setState(function (prevState) {
                var newOptions = prevState.options;
                newOptions.push(option);
                return {
                    options: newOptions
                    //or we can do concat
                    //options : prevState.options.concat(option)
                };
            });
        }
    }, {
        key: 'handleRemoveAllClick',
        value: function handleRemoveAllClick() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var random = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[random]);
        }
    }, {
        key: 'onRemoveIndividual',
        value: function onRemoveIndividual(itemIndex) {
            var newOptions = this.state.options;
            newOptions.splice(itemIndex, 1);
            this.setState(function () {
                return { options: newOptions };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var app = {
                title: 'Indecision App ', subtitle: 'Put your hands in the life of computer'
            };
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: app.title, subtitle: app.subtitle }),
                React.createElement(Action, { options: this.state.options, hasOptions: this.state.options.length > 0, handlePick: this.handlePick }),
                React.createElement(Options, { options: this.state.options,
                    handleRemoveAllClick: this.handleRemoveAllClick,
                    onRemoveIndividual: this.onRemoveIndividual
                }),
                React.createElement(AddOptions, { handleAddOptionClick: this.handleAddOptionClick })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

// class Header extends React.Component {
//     render() {
//         const { title, subtitle } = this.props
//         return (
//             <div>
//                 <h1>{title}</h1>
//                 <h2>{subtitle}</h2>
//             </div>
//         )
//     }
// }

var Header = function Header(props) {
    var title = props.title,
        subtitle = props.subtitle;

    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            title
        ),
        React.createElement(
            'h2',
            null,
            subtitle
        )
    );
};

Header.defaultProps = {
    title: "Default Title"

    // class Action extends React.Component {
    //     render() {
    //         return (
    //             <div>
    //                 <button
    //                     disabled={!this.props.hasOptions}
    //                     onClick={() => this.props.handlePick()}
    //                 >What should I do?</button>
    //             </div>
    //         )
    //     }
    // }

};var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                disabled: !props.hasOptions,
                onClick: function onClick() {
                    return props.handlePick();
                }
            },
            'What should I do?'
        )
    );
};

// class Option extends React.Component {

//     render() {
//         const { option } = this.props
//         return (
//             <div>{option}</div>
//         )
//     }
// }

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'span',
            null,
            props.option
        ),
        React.createElement(
            'button',
            { key: props.option,
                onClick: function onClick() {
                    return props.onRemoveIndividual(props.itemIndex);
                } },
            'Remove'
        )
    );
};

// class Options extends React.Component {
//     render() {
//         const { options } = this.props
//         return (
//             <div>
//                 <button onClick={() => this.props.handleRemoveAllClick()}>Remove All</button>
//                 {options.map((item, itemIndex) => <Option key={itemIndex} option={item} />)}
//             </div>
//         )
//     }
// }

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: function onClick() {
                    return props.handleRemoveAllClick();
                } },
            'Remove All'
        ),
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Please add some options to get started'
        ),
        props.options.map(function (item, itemIndex) {
            return React.createElement(Option, {
                key: itemIndex,
                itemIndex: itemIndex,
                option: item,
                onRemoveIndividual: props.onRemoveIndividual
            });
        })
    );
};

var AddOptions = function (_React$Component2) {
    _inherits(AddOptions, _React$Component2);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this2 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            errorMsg: undefined
        };
        return _this2;
    }

    _createClass(AddOptions, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value;
            var errorMsg = this.props.handleAddOptionClick(option.trim());
            this.setState(function () {
                return { errorMsg: errorMsg };
            });
            if (!errorMsg) {
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.errorMsg && React.createElement(
                    'p',
                    null,
                    this.state.errorMsg
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
