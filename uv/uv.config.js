self.__uv$config = {
    prefix: '/what/_/',
    bare: 'https://client.incog.dev/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/what/uv/uv.handler.js',
    bundle: '/what/uv/uv.bundle.js',
    config: '/what/uv/uv.config.js',
    sw: '/what/uv/uv.sw.js',
};
