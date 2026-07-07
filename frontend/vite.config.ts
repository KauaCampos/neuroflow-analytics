import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
export default defineConfig({plugins:[react()],resolve:{alias:{'@':path.resolve(__dirname,'./src'),'@app':path.resolve(__dirname,'./src/app'),'@components':path.resolve(__dirname,'./src/components'),'@features':path.resolve(__dirname,'./src/features'),'@lib':path.resolve(__dirname,'./src/lib'),'@pages':path.resolve(__dirname,'./src/pages'),'@routes':path.resolve(__dirname,'./src/routes'),'@services':path.resolve(__dirname,'./src/services'),'@types':path.resolve(__dirname,'./src/types'),'@utils':path.resolve(__dirname,'./src/utils')}}});
