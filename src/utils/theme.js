export const theme = {
    input: {
        styles: {
            variants: {
                outlined: {
                    base: {
                        input: {
                            borderWidth: "placeholder-shown:border",
                            borderColor:
                                "placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200",
                            floated: {
                                borderWidth: "border focus:border",
                                borderColor: "border-t-transparent focus:border-t-transparent",
                            },
                        },
                        label: {
                            before: {
                                floated: {
                                    bt: "before:border-t peer-focus:before:border-t",
                                    bl: "before:border-l peer-focus:before:border-l",
                                },
                            },
                            after: {
                                floated: {
                                    bt: "after:border-t peer-focus:after:border-t",
                                    br: "after:border-r peer-focus:after:border-r",
                                }
                            },
                        },
                    }
                }
            }
        }
    }
}