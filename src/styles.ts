const gradientText = (reverse?: boolean) => {
    return {
        background: `-webkit-linear-gradient(${
            reverse ? '180deg' : '360deg'
        }, red, yellow)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    }
}

export { gradientText }
