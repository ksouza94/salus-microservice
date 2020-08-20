module.exports = (app,repository)=>{
    app.get('/fabricantes',(req,res,next)=>{
        repository.getAllFabricantes((err,fabricantes)=>{
            if(err) return next(err);
            res.json(fabricantes);
        });
    })
    app.get('/fabricantes/:id',(req,res,next)=>{
        repository.getFabricanteById(req.params.id,(err,fabricante)=>{
            if(err) return next(err);
            res.json(fabricante);

        });
    })
}