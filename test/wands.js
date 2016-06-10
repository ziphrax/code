var supertest = require('supertest');
var should = require('should');
var server = supertest.agent('http://localhost:3000');

describe('Wands API',function(){
    describe('GET Methods',function(){
        it('GET /api/wands should return success and an array of docs',function(done){
        server.get('/api/wands')
              .expect("Content-type",/json/)
              .expect(200)
              .end(function(err,res){
                  res.status.should.equal(200);
                  res.body.success.should.equal(true);
                  res.body.docs.should.be.instanceof(Array);
                  done();
              });
    });

    it('GET /api/wands/575adbe405bc8149828ab9ba should return success and the wand with id 575adbe405bc8149828ab9ba',function(done){
        server.get('/api/wands/575adbe405bc8149828ab9ba')
            .expect("Content-type",/json/)
              .expect(200)
              .end(function(err,res){
                  res.status.should.equal(200);
                  res.body.success.should.equal(true);
                  res.body.docs.should.be.instanceof(Array).and.have.lengthOf(1);
                  res.body.docs[0]._id.should.equal('575adbe405bc8149828ab9ba');
                  done();
              });
    });
    });
    
    describe('POST Methods',function(){
        it('POST /api/wands/ should return success and a new doc with an id',function(done){
            var test_wand = {
                maker: "TEST",
                name: "test_wand",
                price : 66.6,
                required_level : 0,
                image_url : "",
                range: 0.00,
                damage: {        
                    melee : 1.00,
                    kinetic: 1.00,
                    psionc : 1.00,
                    fire : 1.00,
                    water : 1.00,
                    earth : 1.00,
                    air :  1.00,
                    life : 1.00,
                    poison : 1.00,
                    death : 1.00,
                    corrosion : 1.00
                }
            };
            server.post('/api/wands')
                .send(test_wand)
                .expect(200)
                .end(function(err,res){                
                    res.status.should.equal(200);
                    res.body.success.should.equal(true);
                    res.body.docs.should.be.instanceof(Array).and.have.lengthOf(1);
                    res.body.docs[0].maker.should.equal(test_wand.maker);
                    res.body.docs[0].name.should.equal(test_wand.name);
                    res.body.docs[0].price.should.equal(test_wand.price);
                    res.body.docs[0].range.should.equal(test_wand.range);
                    res.body.docs[0].required_level.should.equal(test_wand.required_level);
                    res.body.docs[0].image_url.should.equal(test_wand.image_url);               
                    done();
                });
        });
    });
    
});