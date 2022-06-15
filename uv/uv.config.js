self.__uv$config = {
    prefix: '/confusion/_/',
    bare: 'https://client.incog.dev/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/confusion/uv/uv.handler.js',
    bundle: '/confusion/uv/uv.bundle.js',
    config: '/confusion/uv/uv.config.js',
    sw: '/confusion/uv/uv.sw.js',
};
