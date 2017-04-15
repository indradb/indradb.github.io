var searchIndex = {};
searchIndex["braid"] = {"doc":"Braid - a graph datastore.","items":[[3,"Vertex","braid","A vertex.",null,null],[12,"id","","The id of the vertex.",0,null],[12,"t","","The type of the vertex.",0,null],[3,"EdgeKey","","Represents a uniquely identifiable key to an edge.",null,null],[12,"outbound_id","","The id of the outbound vertex.",1,null],[12,"t","","The type of the edge.",1,null],[12,"inbound_id","","The id of the inbound vertex.",1,null],[3,"Edge","","An edge.",null,null],[12,"key","","The key to the edge.",2,null],[12,"weight","","The weight of the edge.",2,null],[12,"update_datetime","","When the edge was last updated.",2,null],[3,"Weight","","An edge weight.",null,null],[12,"0","","",3,null],[3,"Type","","An edge or vertex type.",null,null],[12,"0","","",4,null],[3,"ValidationError","","The error returned when there is an attempt to instantiate a model with an invalid value.",null,null],[3,"PostgresDatastore","","A datastore that is backed by a postgres database.",null,null],[3,"PostgresTransaction","","A postgres-backed datastore transaction.",null,null],[3,"RocksdbDatastore","","A datastore that is backed by rocksdb.",null,null],[3,"RocksdbTransaction","","A transaction that is backed by rocksdb.",null,null],[4,"QueryTypeConverter","","Specifies what kind of items should be piped from one type of query to another.",null,null],[13,"Outbound","","",5,null],[13,"Inbound","","",5,null],[4,"VertexQuery","","A query for vertices.",null,null],[13,"All","","",6,null],[13,"Vertex","","",6,null],[13,"Vertices","","",6,null],[13,"Pipe","","",6,null],[4,"EdgeQuery","","A query for edges.",null,null],[13,"Edge","","",7,null],[13,"Edges","","",7,null],[13,"Pipe","","",7,null],[4,"Error","","The error returned by datastore and transaction implementation methods.",null,null],[13,"AccountNotFound","","",8,null],[13,"VertexNotFound","","",8,null],[13,"EdgeNotFound","","",8,null],[13,"MetadataNotFound","","",8,null],[13,"Unauthorized","","",8,null],[13,"OutOfRange","","",8,null],[13,"Unexpected","","",8,null],[0,"tests","","Unit tests for datastore implementations.",null,null],[3,"DatastoreTestSandbox","braid::tests","",null,null],[12,"name","","",9,null],[12,"owner_id","","",9,null],[12,"owner_secret","","",9,null],[12,"datastore","","",9,null],[12,"accounts","","",9,null],[5,"should_fail_auth_with_a_bad_username","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_fail_auth_with_a_bad_password","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_successfully_auth_with_good_credentials","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_lookup_valid_accounts","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_fail_to_lookup_invalid_accounts","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_fail_when_attempting_to_delete_invalid_accounts","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_get_a_valid_edge","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_not_get_an_invalid_edge","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_create_a_valid_edge","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_update_a_valid_edge","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_not_create_an_invalid_edge","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_not_create_an_edge_with_bad_permissions","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_not_update_an_edge_with_bad_permissions","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_delete_a_valid_edge","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_not_delete_an_invalid_edge","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_not_delete_an_edge_with_bad_permissions","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_get_an_edge_count","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_get_an_edge_count_with_no_type","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_get_an_edge_count_for_an_invalid_edge","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_get_an_edge_range","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_get_edges_with_no_type","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_get_no_edges_for_an_invalid_range","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_get_edges_with_no_high","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_get_edges_with_no_low","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_get_edges_with_no_time","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_get_no_edges_for_reversed_time","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_get_edges","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_handle_global_metadata","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_handle_account_metadata","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_not_set_invalid_account_metadata","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_not_delete_invalid_account_metadata","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_handle_vertex_metadata","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_not_set_invalid_vertex_metadata","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_not_delete_invalid_vertex_metadata","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_handle_edge_metadata","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_not_set_invalid_edge_metadata","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_not_delete_invalid_edge_metadata","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"create_edge_from","","",null,{"inputs":[{"name":"t"},{"name":"uuid"}],"output":{"name":"uuid"}}],[5,"create_edges","","",null,null],[5,"create_time_range_queryable_edges","","",null,null],[5,"should_get_all_vertices","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_get_all_vertices_with_zero_limit","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_get_all_vertices_out_of_range","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_get_single_vertices","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_get_single_vertices_nonexisting","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_get_vertices","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_get_vertices_piped","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_update_a_valid_vertex","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_not_update_an_invalid_vertex","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_delete_a_valid_vertex","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_not_delete_an_invalid_vertex","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[5,"should_not_delete_an_unowned_vertex","","",null,{"inputs":[{"name":"datastoretestsandbox"}],"output":null}],[11,"new","","",9,{"inputs":[{"name":"d"}],"output":{"name":"datastoretestsandbox"}}],[11,"generate_unique_string","","",9,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"string"}}],[11,"transaction","","",9,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"register_account","","",9,null],[11,"setup","","",9,{"inputs":[{"name":"self"},{"name":"str"}],"output":null}],[11,"teardown","","",9,{"inputs":[{"name":"self"}],"output":null}],[11,"eq","braid","",8,{"inputs":[{"name":"self"},{"name":"error"}],"output":{"name":"bool"}}],[11,"ne","","",8,{"inputs":[{"name":"self"},{"name":"error"}],"output":{"name":"bool"}}],[11,"clone","","",8,{"inputs":[{"name":"self"}],"output":{"name":"error"}}],[11,"fmt","","",8,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description_to_error","","A utility method that converts an error message back to an error object.",8,{"inputs":[{"name":"str"}],"output":{"name":"self"}}],[11,"description","","",8,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",8,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"fmt","","",8,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",10,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Creates a new validation error.",10,{"inputs":[{"name":"string"}],"output":{"name":"validationerror"}}],[11,"description","","",10,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",10,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"fmt","","",10,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"vertex"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Creates a new vertex.",0,{"inputs":[{"name":"uuid"},{"name":"type"}],"output":{"name":"vertex"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"vertex"}],"output":{"name":"bool"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"edgekey"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"edgekey"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"self"},{"name":"edgekey"}],"output":{"name":"bool"}}],[11,"hash","","",1,null],[11,"new","","Creates a new edge key.",1,{"inputs":[{"name":"uuid"},{"name":"type"},{"name":"uuid"}],"output":{"name":"edgekey"}}],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"edge"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new_with_current_datetime","","Creates a new edge with the current datetime in UTC.",2,{"inputs":[{"name":"edgekey"},{"name":"weight"}],"output":{"name":"edge"}}],[11,"new","","Creates a new edge with a specified datetime.",2,{"inputs":[{"name":"edgekey"},{"name":"weight"},{"name":"datetime"}],"output":{"name":"edge"}}],[11,"clone","","",3,{"inputs":[{"name":"self"}],"output":{"name":"weight"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Constructs a new edge weight.",3,{"inputs":[{"name":"f32"}],"output":{"name":"result"}}],[11,"eq","","",4,{"inputs":[{"name":"self"},{"name":"type"}],"output":{"name":"bool"}}],[11,"ne","","",4,{"inputs":[{"name":"self"},{"name":"type"}],"output":{"name":"bool"}}],[11,"clone","","",4,{"inputs":[{"name":"self"}],"output":{"name":"type"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"hash","","",4,null],[11,"new","","Constructs a new type.",4,{"inputs":[{"name":"string"}],"output":{"name":"result"}}],[11,"from_str","","",4,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"eq","","",5,{"inputs":[{"name":"self"},{"name":"querytypeconverter"}],"output":{"name":"bool"}}],[11,"clone","","",5,{"inputs":[{"name":"self"}],"output":{"name":"querytypeconverter"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"hash","","",5,null],[11,"eq","","",6,{"inputs":[{"name":"self"},{"name":"vertexquery"}],"output":{"name":"bool"}}],[11,"ne","","",6,{"inputs":[{"name":"self"},{"name":"vertexquery"}],"output":{"name":"bool"}}],[11,"clone","","",6,{"inputs":[{"name":"self"}],"output":{"name":"vertexquery"}}],[11,"fmt","","",6,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"hash","","",6,null],[11,"outbound_edges","","",6,{"inputs":[{"name":"self"},{"name":"option"},{"name":"option"},{"name":"option"},{"name":"u32"}],"output":{"name":"edgequery"}}],[11,"inbound_edges","","",6,{"inputs":[{"name":"self"},{"name":"option"},{"name":"option"},{"name":"option"},{"name":"u32"}],"output":{"name":"edgequery"}}],[11,"eq","","",7,{"inputs":[{"name":"self"},{"name":"edgequery"}],"output":{"name":"bool"}}],[11,"ne","","",7,{"inputs":[{"name":"self"},{"name":"edgequery"}],"output":{"name":"bool"}}],[11,"clone","","",7,{"inputs":[{"name":"self"}],"output":{"name":"edgequery"}}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"hash","","",7,null],[11,"outbound_vertices","","",7,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"vertexquery"}}],[11,"inbound_vertices","","",7,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"vertexquery"}}],[11,"from","","",8,{"inputs":[{"name":"r2d2postgreserror"}],"output":{"name":"error"}}],[11,"from","","",8,{"inputs":[{"name":"postgreserror"}],"output":{"name":"error"}}],[11,"from","","",8,{"inputs":[{"name":"gettimeout"}],"output":{"name":"error"}}],[11,"clone","","",11,{"inputs":[{"name":"self"}],"output":{"name":"postgresdatastore"}}],[11,"fmt","","",11,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Creates a new postgres-backed datastore.",11,{"inputs":[{"name":"option"},{"name":"string"},{"name":"string"},{"name":"bool"}],"output":{"name":"postgresdatastore"}}],[11,"create_schema","","Creates a new postgres-backed datastore.",11,{"inputs":[{"name":"string"}],"output":{"name":"result"}}],[11,"has_account","","",11,{"inputs":[{"name":"self"},{"name":"uuid"}],"output":{"name":"result"}}],[11,"create_account","","",11,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"delete_account","","",11,{"inputs":[{"name":"self"},{"name":"uuid"}],"output":{"name":"result"}}],[11,"auth","","",11,{"inputs":[{"name":"self"},{"name":"uuid"},{"name":"string"}],"output":{"name":"result"}}],[11,"transaction","","",11,{"inputs":[{"name":"self"},{"name":"uuid"}],"output":{"name":"result"}}],[11,"fmt","","",12,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"create_vertex","","",12,{"inputs":[{"name":"self"},{"name":"type"}],"output":{"name":"result"}}],[11,"get_vertices","","",12,{"inputs":[{"name":"self"},{"name":"vertexquery"}],"output":{"name":"result"}}],[11,"set_vertices","","",12,{"inputs":[{"name":"self"},{"name":"vertexquery"},{"name":"type"}],"output":{"name":"result"}}],[11,"delete_vertices","","",12,{"inputs":[{"name":"self"},{"name":"vertexquery"}],"output":{"name":"result"}}],[11,"create_edge","","",12,{"inputs":[{"name":"self"},{"name":"edgekey"},{"name":"weight"}],"output":{"name":"result"}}],[11,"get_edges","","",12,{"inputs":[{"name":"self"},{"name":"edgequery"}],"output":{"name":"result"}}],[11,"set_edges","","",12,{"inputs":[{"name":"self"},{"name":"edgequery"},{"name":"weight"}],"output":{"name":"result"}}],[11,"delete_edges","","",12,{"inputs":[{"name":"self"},{"name":"edgequery"}],"output":{"name":"result"}}],[11,"get_edge_count","","",12,{"inputs":[{"name":"self"},{"name":"edgequery"}],"output":{"name":"result"}}],[11,"get_global_metadata","","",12,{"inputs":[{"name":"self"},{"name":"string"}],"output":{"name":"result"}}],[11,"set_global_metadata","","",12,{"inputs":[{"name":"self"},{"name":"string"},{"name":"jsonvalue"}],"output":{"name":"result"}}],[11,"delete_global_metadata","","",12,{"inputs":[{"name":"self"},{"name":"string"}],"output":{"name":"result"}}],[11,"get_account_metadata","","",12,{"inputs":[{"name":"self"},{"name":"uuid"},{"name":"string"}],"output":{"name":"result"}}],[11,"set_account_metadata","","",12,{"inputs":[{"name":"self"},{"name":"uuid"},{"name":"string"},{"name":"jsonvalue"}],"output":{"name":"result"}}],[11,"delete_account_metadata","","",12,{"inputs":[{"name":"self"},{"name":"uuid"},{"name":"string"}],"output":{"name":"result"}}],[11,"get_vertex_metadata","","",12,{"inputs":[{"name":"self"},{"name":"vertexquery"},{"name":"string"}],"output":{"name":"result"}}],[11,"set_vertex_metadata","","",12,{"inputs":[{"name":"self"},{"name":"vertexquery"},{"name":"string"},{"name":"jsonvalue"}],"output":{"name":"result"}}],[11,"delete_vertex_metadata","","",12,{"inputs":[{"name":"self"},{"name":"vertexquery"},{"name":"string"}],"output":{"name":"result"}}],[11,"get_edge_metadata","","",12,{"inputs":[{"name":"self"},{"name":"edgequery"},{"name":"string"}],"output":{"name":"result"}}],[11,"set_edge_metadata","","",12,{"inputs":[{"name":"self"},{"name":"edgequery"},{"name":"string"},{"name":"jsonvalue"}],"output":{"name":"result"}}],[11,"delete_edge_metadata","","",12,{"inputs":[{"name":"self"},{"name":"edgequery"},{"name":"string"}],"output":{"name":"result"}}],[11,"commit","","",12,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"rollback","","",12,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"from","","",8,{"inputs":[{"name":"rocksdberror"}],"output":{"name":"error"}}],[11,"from","","",8,{"inputs":[{"name":"bincodeerror"}],"output":{"name":"error"}}],[11,"from","","",8,{"inputs":[{"name":"utf8error"}],"output":{"name":"error"}}],[11,"from","","",8,{"inputs":[{"name":"error"}],"output":{"name":"error"}}],[11,"fmt","","",13,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Creates a new rocksdb datastore.",13,{"inputs":[{"name":"str"},{"name":"option"},{"name":"bool"}],"output":{"name":"result"}}],[11,"repair","","Runs a repair operation on the rocksdb database.",13,{"inputs":[{"name":"str"},{"name":"option"}],"output":{"name":"result"}}],[11,"has_account","","",13,{"inputs":[{"name":"self"},{"name":"uuid"}],"output":{"name":"result"}}],[11,"create_account","","",13,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"delete_account","","",13,{"inputs":[{"name":"self"},{"name":"uuid"}],"output":{"name":"result"}}],[11,"auth","","",13,{"inputs":[{"name":"self"},{"name":"uuid"},{"name":"string"}],"output":{"name":"result"}}],[11,"transaction","","",13,{"inputs":[{"name":"self"},{"name":"uuid"}],"output":{"name":"result"}}],[11,"fmt","","",14,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"create_vertex","","",14,{"inputs":[{"name":"self"},{"name":"type"}],"output":{"name":"result"}}],[11,"get_vertices","","",14,{"inputs":[{"name":"self"},{"name":"vertexquery"}],"output":{"name":"result"}}],[11,"set_vertices","","",14,{"inputs":[{"name":"self"},{"name":"vertexquery"},{"name":"type"}],"output":{"name":"result"}}],[11,"delete_vertices","","",14,{"inputs":[{"name":"self"},{"name":"vertexquery"}],"output":{"name":"result"}}],[11,"create_edge","","",14,{"inputs":[{"name":"self"},{"name":"edgekey"},{"name":"weight"}],"output":{"name":"result"}}],[11,"get_edges","","",14,{"inputs":[{"name":"self"},{"name":"edgequery"}],"output":{"name":"result"}}],[11,"set_edges","","",14,{"inputs":[{"name":"self"},{"name":"edgequery"},{"name":"weight"}],"output":{"name":"result"}}],[11,"delete_edges","","",14,{"inputs":[{"name":"self"},{"name":"edgequery"}],"output":{"name":"result"}}],[11,"get_edge_count","","",14,{"inputs":[{"name":"self"},{"name":"edgequery"}],"output":{"name":"result"}}],[11,"get_global_metadata","","",14,{"inputs":[{"name":"self"},{"name":"string"}],"output":{"name":"result"}}],[11,"set_global_metadata","","",14,{"inputs":[{"name":"self"},{"name":"string"},{"name":"jsonvalue"}],"output":{"name":"result"}}],[11,"delete_global_metadata","","",14,{"inputs":[{"name":"self"},{"name":"string"}],"output":{"name":"result"}}],[11,"get_account_metadata","","",14,{"inputs":[{"name":"self"},{"name":"uuid"},{"name":"string"}],"output":{"name":"result"}}],[11,"set_account_metadata","","",14,{"inputs":[{"name":"self"},{"name":"uuid"},{"name":"string"},{"name":"jsonvalue"}],"output":{"name":"result"}}],[11,"delete_account_metadata","","",14,{"inputs":[{"name":"self"},{"name":"uuid"},{"name":"string"}],"output":{"name":"result"}}],[11,"get_vertex_metadata","","",14,{"inputs":[{"name":"self"},{"name":"vertexquery"},{"name":"string"}],"output":{"name":"result"}}],[11,"set_vertex_metadata","","",14,{"inputs":[{"name":"self"},{"name":"vertexquery"},{"name":"string"},{"name":"jsonvalue"}],"output":{"name":"result"}}],[11,"delete_vertex_metadata","","",14,{"inputs":[{"name":"self"},{"name":"vertexquery"},{"name":"string"}],"output":{"name":"result"}}],[11,"get_edge_metadata","","",14,{"inputs":[{"name":"self"},{"name":"edgequery"},{"name":"string"}],"output":{"name":"result"}}],[11,"set_edge_metadata","","",14,{"inputs":[{"name":"self"},{"name":"edgequery"},{"name":"string"},{"name":"jsonvalue"}],"output":{"name":"result"}}],[11,"delete_edge_metadata","","",14,{"inputs":[{"name":"self"},{"name":"edgequery"},{"name":"string"}],"output":{"name":"result"}}],[11,"commit","","",14,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"rollback","","",14,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[8,"Datastore","","Specifies a datastore implementation.",null,null],[10,"has_account","","Checks if an account exists.",15,{"inputs":[{"name":"self"},{"name":"uuid"}],"output":{"name":"result"}}],[10,"create_account","","Creates a new account, returning a tuple of its ID and secret.",15,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[10,"delete_account","","Deletes an account.",15,{"inputs":[{"name":"self"},{"name":"uuid"}],"output":{"name":"result"}}],[10,"auth","","Checks account authentication.",15,{"inputs":[{"name":"self"},{"name":"uuid"},{"name":"string"}],"output":{"name":"result"}}],[10,"transaction","","Creates a new transaction tied to a given account.",15,{"inputs":[{"name":"self"},{"name":"uuid"}],"output":{"name":"result"}}],[8,"Transaction","","Specifies a transaction implementation, which are returned by datastores. Transactions are responsible for managing:",null,null],[10,"create_vertex","","Creates a new vertex.",16,{"inputs":[{"name":"self"},{"name":"type"}],"output":{"name":"result"}}],[10,"get_vertices","","Gets a range of vertices specified by a query.",16,{"inputs":[{"name":"self"},{"name":"vertexquery"}],"output":{"name":"result"}}],[10,"set_vertices","","Sets the type of existing vertices specified by a query.",16,{"inputs":[{"name":"self"},{"name":"vertexquery"},{"name":"type"}],"output":{"name":"result"}}],[10,"delete_vertices","","Deletes existing vertices specified by a query.",16,{"inputs":[{"name":"self"},{"name":"vertexquery"}],"output":{"name":"result"}}],[10,"create_edge","","Creates a new edge. If the edge already exists, this will update it with a new update datetime and weight. The transaction tied to the account must own the vertex from which the edge is outbounding from, but does not need to own the inbounding vertex.",16,{"inputs":[{"name":"self"},{"name":"edgekey"},{"name":"weight"}],"output":{"name":"result"}}],[10,"get_edges","","Gets a range of edges specified by a query.",16,{"inputs":[{"name":"self"},{"name":"edgequery"}],"output":{"name":"result"}}],[10,"set_edges","","Updates an existing set of edges specified by a query.",16,{"inputs":[{"name":"self"},{"name":"edgequery"},{"name":"weight"}],"output":{"name":"result"}}],[10,"delete_edges","","Deletes a set of edges specified by a query.",16,{"inputs":[{"name":"self"},{"name":"edgequery"}],"output":{"name":"result"}}],[10,"get_edge_count","","Gets the number of edges that match a query.",16,{"inputs":[{"name":"self"},{"name":"edgequery"}],"output":{"name":"result"}}],[10,"get_global_metadata","","Gets a global metadata value.",16,{"inputs":[{"name":"self"},{"name":"string"}],"output":{"name":"result"}}],[10,"set_global_metadata","","Sets a global metadata value.",16,{"inputs":[{"name":"self"},{"name":"string"},{"name":"jsonvalue"}],"output":{"name":"result"}}],[10,"delete_global_metadata","","Deletes a global metadata value.",16,{"inputs":[{"name":"self"},{"name":"string"}],"output":{"name":"result"}}],[10,"get_account_metadata","","Gets an account metadata value.",16,{"inputs":[{"name":"self"},{"name":"uuid"},{"name":"string"}],"output":{"name":"result"}}],[10,"set_account_metadata","","Sets an account metadata value.",16,{"inputs":[{"name":"self"},{"name":"uuid"},{"name":"string"},{"name":"jsonvalue"}],"output":{"name":"result"}}],[10,"delete_account_metadata","","Deletes an account metadata value.",16,{"inputs":[{"name":"self"},{"name":"uuid"},{"name":"string"}],"output":{"name":"result"}}],[10,"get_vertex_metadata","","Gets a vertex metadata value.",16,{"inputs":[{"name":"self"},{"name":"vertexquery"},{"name":"string"}],"output":{"name":"result"}}],[10,"set_vertex_metadata","","Sets a vertex metadata value.",16,{"inputs":[{"name":"self"},{"name":"vertexquery"},{"name":"string"},{"name":"jsonvalue"}],"output":{"name":"result"}}],[10,"delete_vertex_metadata","","Deletes a vertex metadata value.",16,{"inputs":[{"name":"self"},{"name":"vertexquery"},{"name":"string"}],"output":{"name":"result"}}],[10,"get_edge_metadata","","Gets an edge metadata value.",16,{"inputs":[{"name":"self"},{"name":"edgequery"},{"name":"string"}],"output":{"name":"result"}}],[10,"set_edge_metadata","","Sets an edge metadata value.",16,{"inputs":[{"name":"self"},{"name":"edgequery"},{"name":"string"},{"name":"jsonvalue"}],"output":{"name":"result"}}],[10,"delete_edge_metadata","","Deletes an edge metadata value.",16,{"inputs":[{"name":"self"},{"name":"edgequery"},{"name":"string"}],"output":{"name":"result"}}],[10,"commit","","Commits the transaction.",16,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[10,"rollback","","Rolls the transaction back.",16,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[14,"define_test","","Defines a unit test function.",null,null],[14,"test_account_impl","","Use this macro to enable the standard test suite for accounts.",null,null],[14,"test_transaction_impl","","Use this macro to enable the standard test suite for transactions.",null,null],[14,"test_metadata_impl","","Use this macro to enable the standard test suite for metadata.",null,null]],"paths":[[3,"Vertex"],[3,"EdgeKey"],[3,"Edge"],[3,"Weight"],[3,"Type"],[4,"QueryTypeConverter"],[4,"VertexQuery"],[4,"EdgeQuery"],[4,"Error"],[3,"DatastoreTestSandbox"],[3,"ValidationError"],[3,"PostgresDatastore"],[3,"PostgresTransaction"],[3,"RocksdbDatastore"],[3,"RocksdbTransaction"],[8,"Datastore"],[8,"Transaction"]]};
initSearch(searchIndex);
